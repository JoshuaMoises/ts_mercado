import express, { Router } from 'express'
import productController from '../../controlllers/products/productController'

const productRouter: Router = express.Router()

productRouter.post("/product", productController.create)

export default productRouter