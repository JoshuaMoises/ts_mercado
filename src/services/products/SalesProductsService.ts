import productRepository from "../../model/product/productRepository"
import productModelInterface from "../../model/product/interface/productModelInterface"

const getAllById =  async (id: number): Promise<productModelInterface[] | undefined> => {
    try {
        const products = await productRepository.findAll({
        loginId: id
    })
    return products
    } catch (error: any) {
        throw new Error (error)
    }
}

export default {
    getAllById
}