import express, {Express} from "express"
import routerMercado from "./routers/mercado"
import productRouter from "./routers/products"
import orderRouter from "./routers/Order"

const app: Express = express()

app.use(express.json())
app.use(routerMercado)
app.use(productRouter)
app.use(orderRouter)

export default app