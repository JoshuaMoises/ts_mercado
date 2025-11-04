import express, { Router } from 'express'
import orderController from '../../controlllers/order/orderController'

const orderRouter: Router = express.Router()

orderRouter.post("/order" , orderController.create)


export default orderRouter