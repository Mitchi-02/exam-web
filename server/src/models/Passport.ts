import { Schema, model } from 'mongoose'
import { IPassport } from '@/types/models'

const passportSchema = new Schema<IPassport>(
  {
    passport_uid: String,
    etudiant: {
      type: Schema.Types.ObjectId,
      ref: 'Etudiant',
    },
  },
  { timestamps: true }
)

const Passport = model<IPassport>('Passport', passportSchema, 'passports')

export default Passport
