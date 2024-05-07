import { Router } from 'express'
import * as EtudiantController from '@/controllers/EtudiantController'

const EtudiantRooutes = Router()

EtudiantRooutes.get('/', EtudiantController.index)

EtudiantRooutes.get('/some', EtudiantController.some)

EtudiantRooutes.get('/:id', EtudiantController.show)

EtudiantRooutes.post('/', EtudiantController.store)

EtudiantRooutes.put('/:id', EtudiantController.update)

EtudiantRooutes.delete('/:id', EtudiantController.destroy)

export default EtudiantRooutes
