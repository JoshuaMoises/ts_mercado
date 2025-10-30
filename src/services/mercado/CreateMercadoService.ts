import validPayload from "../../model/login/interface/validPayloadInterface"
import loginModelInterface from "../../model/login/interface/loginModelInterface"
import LoginRepository from "../../model/login/LoginRepository"
import bcrypt from "bcrypt"

const validPayload = (login: Partial<loginModelInterface>): boolean => {
    if(login.email || login.name || login.password) {
        return false
    }
    return true

    }
const create = async (login: Partial<loginModelInterface>): Promise<loginModelInterface | null> => {
    try {
        if (!login.password) {
            return null
        }
        login.password = await bcrypt.hash(login.password, 10)

        const loginNew = await LoginRepository.create(login)

        return loginNew
    } catch (error: any) {
        throw new Error(error);
    }
}

const loginExist = async (email: string): Promise<boolean> => {
    const login = await LoginRepository.findByEmail(email) 

    if (login) {
        return true
    }

    return false
}

export default {
    create,
    validPayload,
    loginExist
}