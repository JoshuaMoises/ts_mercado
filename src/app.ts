import express, {Express} from "express"
import routerMercado from "./routers/mercado"

const app: Express = express()

app.use(express.json())
app.use(routerMercado)

export default app