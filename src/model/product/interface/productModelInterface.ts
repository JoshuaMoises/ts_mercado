import { Model } from "@sequelize/core"

interface productModelInterface extends Model {
    name: string,
    sku: string,
    quantity: number,
    price: number,
    loginId: number
}

export default productModelInterface