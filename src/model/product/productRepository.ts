import Product from "./product";
import productModelInterface from "./interface/productModelInterface";


const create = async (product: Partial<productModelInterface>): Promise<productModelInterface> => {
    try {
        const newProduct = await Product.create(product)
        return newProduct
    } catch (error: any) {
        throw new Error(error);
    }
}

const findBySku = async (sku: string, where: object = {}): Promise<productModelInterface | null> => {
    try {
       const product = await Product.findOne ({
        where: {
            sku,
            ...where
        }
       }) 
       return product
    } catch (error: any) {
        throw new Error(error);
    }
}
const destroyProduct = async (id: number) => {
    try {
        const product = await Product.destroy({
        where: {
            id: id
        }
    })

    if (!product) {
        return false
    }
    return true;
    } catch (error: any) {
        throw new Error(error);
    }
}

const update = async (login: Partial<productModelInterface>,id: number) => {
    try {
        const updateLogin = await Product.update(login,{
        where: {
            id
        }
    })

    if (updateLogin[0] == 0){
        return false
    }

    return true;
    } catch (error: any) {
        throw new Error(error);
    }
}

const findAll = async (where: object = {}):Promise<productModelInterface[]> => {
    try {
        const products = await Product.findAll({
            where: {
                ...where
            },
            attributes: ['name']
        });
        return products
    } catch (error: any) {
        throw new Error(error);
    }
}

export default {
    create,
    findBySku,
    destroyProduct,
    update,
    findAll
}