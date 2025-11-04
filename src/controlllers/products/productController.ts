import { Request, Response } from "express"
import createService from "../../services/products/createService"
import SalesProductsService from "../../services/products/SalesProductsService"

const create = async (req:Request, res:Response ): Promise<void> => {
    const loginId = req.login.id
    const valid = createService.validPayload(req.body)
    if (!valid) {
        res.status(400)
        res.json ({
            message: "você precisa preencher todos os campos"
        })
        return
    }

    const hasSkuRegister = await createService.hasRegister(req.body.sku, loginId)



    if(hasSkuRegister) {
        res.status(400)
        res.json ({
            message: "esse sku ja existe, tente novamente com outro"
        })
        return
    }

        const newProduct = {
        ...req.body,
        loginId
    }
    const createProduct = await createService.create(newProduct)

    if (!createProduct) {
        res.status(500)
        res.json({
            message: "não foi possivel criar o seu registro"
        })
        return
    }

    res.status(201)
    res.json({
        message: "descrição de produto foi criada com sucesso",
        newProduct: createProduct
    })
}

const getSalesProducts = async (req: Request, res: Response) => {
    if (req.params.id) {
        res.status(400)
        res.json ({
            message: "obrigatorio inserir um ID"
        })
    }

    const products = await SalesProductsService.getAllById(parseInt(req.params.id))

    if (!products) {
        res.status(404)
        res.json({
            message:"não foi possiel localizar nenhum dado"
        })
        return
    }

    res.json ({
        message:"produtos localizados com sucesso",
        products
    })
}



export default {
    create,
    getSalesProducts
}