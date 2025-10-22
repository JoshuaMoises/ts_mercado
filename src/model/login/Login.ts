import connection from "../../config/database";
import { DataTypes } from "@sequelize/core"
import loginModelInterface from "./interface/loginModelInterface";

const Login = connection.define<loginModelInterface> ('login', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
})

export default Login