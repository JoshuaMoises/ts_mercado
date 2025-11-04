import express, { Router } from 'express'
import productController from '../../controlllers/products/productController'
import auth from '../../middleware/auth'

const productRouter: Router = express.Router()

productRouter.post("/product",auth , productController.create)

productRouter.get("/products/sales", productController.getSalesProducts)

export default productRouter