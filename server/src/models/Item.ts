import { Schema, model } from 'mongoose'
import { IITem } from '@/types/models'

const itemSchema = new Schema<IITem>(
  {
    name: String,
    description: String,
  },
  { timestamps: true }
)

const Item = model<IITem>(
  'Item',
  itemSchema,
  'items'
)

export default Item
