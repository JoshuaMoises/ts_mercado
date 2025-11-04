import express, { Router } from 'express'
import mercadoController from '../../controlllers/mercado/mercadoController'
import auth from '../../middleware/auth'

const routerMercado: Router = express.Router()

routerMercado.post('/login', mercadoController.createMercado)

routerMercado.post('/auth', mercadoController.authMercado)

routerMercado.get('/me', auth, mercadoController.getLogin)

routerMercado.delete('/me', auth, mercadoController.destroyLogin)
routerMercado.patch('/me', mercadoController.updateLogin)

export default routerMercado