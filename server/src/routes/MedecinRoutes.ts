import { Router } from 'express'
import * as MedecinController from '@/controllers/MedecinController'

const MedecinRoutes = Router()

MedecinRoutes.get('/', MedecinController.index)

MedecinRoutes.post('/', MedecinController.store)

export default MedecinRoutes
