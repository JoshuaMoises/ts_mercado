import { Model } from "@sequelize/core"

interface loginModelInterface extends Model {
    id: number,
    name: string,
    email: string,
    password: string,
    status: boolean,
    createdAt: string,
    updatedAt: string
}

export default loginModelInterface;