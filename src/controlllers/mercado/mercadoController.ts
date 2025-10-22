import { Request, Response } from "express"

const createMercado = async (req: Request, res: Response): Promise<void> => {
    res.json ({
        message: "descrição adicionada ao mercado com sucesso"
    })
}

const authMercado = async (req: Request, res: Response): Promise<void> => {
    res.json ({
        message: "usuario efetuou o login com sucesso"
    })
}

const getLogin = async (req: Request, res: Response): Promise<void> => {
    res.json ({
        message: "devolução de informações do token"
    })
}

const destroyLogin = async (req: Request, res: Response): Promise<void> => {
    res.json ({
        message: "rota para deleção"
    })
}

const updateLogin = async (req: Request, res: Response): Promise<void> => {
    res.json ({
        message: "rota para update de usuario"
    })
}

export default {
    createMercado,
    authMercado,
    getLogin,
    destroyLogin,
    updateLogin
}