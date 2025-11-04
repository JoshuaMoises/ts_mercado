import { Request, Response } from "express"
import OrderCreateService from "../../services/Order/OrderCreateService"
import Login from "../../model/login/Login"

const create =  async (req: Request, res: Response): Promise<void> => {
    try {

        const body = req.body

        const validPayload = OrderCreateService.validPayload(body)

        if (!validPayload) {
            res.status(200)
            res.json({
                message: "todos os campos são obrigatórios"
            })
            return
        }

        const newOrder = {
            productId: 1,
            sku: req.body.sku,
            quantity: req.body.quantity,
            reference: "658455658956",
            price: 2400,
            total: 5300,
            status: "pendente",
            address: "rua campinho"
        }
        
        const order = await OrderCreateService.create(newOrder)

        if(!order) {
            res.status(500)
            res.json ({
                message: "ocorreu um erro inesperado, tente novamente"
            })
        }

        res.json({
        message: "geração de pedido concluída",
        order,
        linkCheckout: "url para pagamento"
    })

    return
    } catch (error) {
        res.status(500)
        res.json ({
            message: "aconteceu um erro inesperado"
        })
    }
}

export default {
    create
}