import express, { Router } from 'express'
import mercadoController from '../../controlllers/mercado/mercadoController'

const routerMercado: Router = express.Router()

routerMercado.post('/mercado', mercadoController.createMercado)

routerMercado.post('/auth', mercadoController.authMercado)

routerMercado.get('/me', mercadoController.getLogin)

routerMercado.delete('/me', mercadoController.destroyLogin)
routerMercado.patch('/me', mercadoController.updateLogin)

export default routerMercado