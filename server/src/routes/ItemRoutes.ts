import { Router } from 'express'
import * as ItemController from '@/controllers/ItemController'

const ItemRoutes = Router()

ItemRoutes.get('/', ItemController.index)

ItemRoutes.get('/:id', ItemController.show)

ItemRoutes.post('/', ItemController.store)

ItemRoutes.put('/:id', ItemController.update)

ItemRoutes.delete('/:id', ItemController.destroy)

export default ItemRoutes
