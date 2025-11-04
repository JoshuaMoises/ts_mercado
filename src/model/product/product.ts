import connection from "../../config/database";
import { DataTypes } from "@sequelize/core"
import productModelInterface from "./interface/productModelInterface";

const Product = connection.define<productModelInterface> ('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sku: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    loginId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Product