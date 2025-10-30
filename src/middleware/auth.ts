import express, { Request, Response, NextFunction } from "express"
import loginModelInterface from "../model/login/interface/loginModelInterface"
import jwt, { JwtPayload } from "jsonwebtoken"
import LoginRepository from "../model/login/LoginRepository"

declare global {
    namespace Express {
        export interface Request {
            login: loginModelInterface
        }
    }
}

interface decodedInterface extends JwtPayload {
    email: string
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            res.status(401)
            res.json({
                message: "token é obrigatorio"
            })
            return
        }

        const token = authHeader.split(' ')[1]
        if (!token) {
            res.status(401)
            res.json({
                message: "token é obrigatorio"
            })
            return
        }

        const JWT_SECRET: string | undefined = process.env.JWT_SECRET

        if (!JWT_SECRET) {
            res.status(500)
            res.json({
                message: "tente novamente mais tarde"
            })
            return
        }


        const decoded = jwt.verify(token, JWT_SECRET) as decodedInterface

        if (!decoded) {
            res.status(401)
            res.json({
                message: "token invalido"
            })
            return
        }

        const login = await LoginRepository.findByEmail(decoded.email)

        if (!login) {
            res.status(401)
            res.json({
                message: "Login não foi autorizado"
            })
            return
        }

        if (!login.status) {
            res.status(401)
            res.json({
                message: "usuario inativo"
            })
            return
        }
        req.login = login
    } catch (error) {
        res.status(401)
        res.json({
            message: "token invalido"
        })
        return
    }

    next()
}

export default auth