import 'dotenv/config'
import connection from "../config/database";
import Login from "./login/Login";
import Product from './product/product';
import Order from './orders/order';

Login.hasMany(Product, {
    foreignKey: {
        name: "loginId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }
} )

Product.hasMany(Order)

connection.sync ({
    force: false,
    alter: true
}).then(() => {
    console.log("as tabelas foram sincronizadas")
})

export default {
    Login
}