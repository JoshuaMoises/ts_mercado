import 'dotenv/config'
import connection from "../config/database";
import Login from "./login/Login";

connection.sync ({
    force: false,
    alter: true
}).then(() => {
    console.log("as tabelas foram sincronizadas")
})

export default {
    Login
}