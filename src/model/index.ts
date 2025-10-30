import 'dotenv/config'
import connection from "../config/database";
import Login from "./login/Login";
import Product from './product/product';

Login.hasMany(Product, {
    foreignKey: {
        name: "loginId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }
} )

connection.sync ({
    force: false,
    alter: true
}).then(() => {
    console.log("as tabelas foram sincronizadas")
})

export default {
    Login
}