import productModelInterface from "../../model/product/interface/productModelInterface"
import productRepository from "../../model/product/productRepository"
import productCreateInterface from "../../model/product/interface/productCreateInterface"


const validPayload = (body: Partial<productModelInterface>): boolean => {

    const fields: (keyof productModelInterface)[] = ['name','sku','price','quantity']

    for (const field of fields) {
        if(body[field] == undefined || body[field] == '') {
            return false
        }
    }

    return true
}

const hasRegister = async (sku:string, loginId: number): Promise<boolean> => {
    const where = {
        loginId
    }
    const product = await productRepository.findBySku(sku, where)
    if (product) {
        return true
    }
    return false
}

const create = async (product: productCreateInterface) => {
    try {
        const createProduct = await productRepository.create(product)

        return createProduct
    } catch (error: any) {
        throw new Error (error)
    }
}
 export default {
     validPayload,
     hasRegister,
     create
 }