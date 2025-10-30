import { Request, Response } from "express"

const create = async (req:Request, res:Response ): Promise<void> => {
    req.login.id
    res.json({
        message: "rota de produto"
    })
}

export default {
    create
}