import { Request, Response } from "express"
import CreateMercadoService from "../../services/mercado/CreateMercadoService"
import AuthMercadoService from "../../services/mercado/AuthMercadoService"
import destroyLoginService from "../../services/mercado/destroyLoginService"
import updateLoginService from "../../services/mercado/updateLoginService"

const createMercado = async (req: Request, res: Response): Promise<void> => {
    const validPayload = CreateMercadoService.validPayload(req.body)

    if (!validPayload) {
        res.status(400)
        res.json({
            message: "Email, password and name is required"
        })
        return 
    }

    const loginExist = await CreateMercadoService.loginExist(req.body.email)

    if (loginExist) {
        res.status(400)
        res.json({
            message: "Email já existe"
        })
        return
    }

    const newLogin = await CreateMercadoService.create(req.body)

    if (!newLogin){
        res.status(500)
        res.json({
            message: "Não foi possivel criar o Login"
        })
        return
    }
    res.json ({
        message: "descrição adicionada ao mercado com sucesso"
    })
}

const authMercado = async (req: Request, res: Response): Promise<void> => {
    const validPayload = AuthMercadoService.validPayloadAuth(req.body)
    if (!validPayload) {
        res.status(500)
        res.json ({
            message: "email ou senha incorreto"
        })
        return
    }
    const login = await AuthMercadoService.auth (req.body.email, req.body.password)
    if (!login) {
        res.status (400)
        res.json ({
            message: "email ou senha invalidos"
        })
        return
    }

    const token = AuthMercadoService.createToken(login)

    if (!token) {
        res.status(500)
        res.json ({
            message: 'erro na criação do token'
        })
        return
    }

    res.json (token)
}

const getLogin = async (req: Request, res: Response): Promise<void> => {
    res.json ({
        data: req.login
    })
}

const destroyLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const destroyed = await destroyLoginService.destroy(req.login.id)
        if (!destroyed) {
            res.status(400)
            res.json({
                message: "não foi possivel deletar esse cadastro"
            })
            return
        }
        res.status(200)
        res.json({
            message: "cadastro deletado com exito"
        })
    } catch (error: any) {
        res.status(500)
        res.json ({
            message: "erro ao deletar usuario tente novamente mais tarde"
        })
    }
}

const updateLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const updated = await updateLoginService.updateLogin(req.body, req.login.id)

        if (!updated){
            res.status(400)
            res.json({
                message: "não foi possivel atualizar esse cadastro"
            })
            return
        }

        res.status(200)
        res.json({
            message: "cadastro atualizado com sucesso"
        })
    } catch (error) {
        res.status(500)
        res.json ({
            message: "erro ao atualizar cadastro"
        })
    }
}

export default {
    createMercado,
    authMercado,
    getLogin,
    destroyLogin,
    updateLogin
}