import validPayloadAuthInterface from "../../model/login/interface/validPayloadAuthInterface"
import LoginRepository from "../../model/login/LoginRepository"
import loginModelInterface from "../../model/login/interface/loginModelInterface"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const validPayloadAuth = (payload: validPayloadAuthInterface): boolean => {
    if(!payload.email || payload.password) {
        return false
    }
    return true
}

const auth = async (email: string, password:string): Promise<loginModelInterface | null> => {
    const login = await LoginRepository.findByEmail(email)
    if (!login) {
        return null
    }

    const match = await bcrypt.compare(password, login.password)
    if (!match) {
        return null 
    }

    return login
}

const createToken = (login: loginModelInterface): boolean | object => {
    const JWT_SECRET: string | undefined = process.env.JWT_SECRET
    if (!JWT_SECRET) {
        return false
    }

    const payload = {
        email: login.email
    }

    const expiresIn = '1H'

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn})

    return {
        token,
        expiresIn
    }
   
}

export default {
    validPayloadAuth,
    auth,
    createToken
}