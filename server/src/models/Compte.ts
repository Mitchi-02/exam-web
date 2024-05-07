import { Schema, model } from 'mongoose'
import { ICompte } from '@/types/models'

const compteSchema = new Schema<ICompte>(
  {
    email: String,
    password: String,
    etudiant: {
      type: Schema.Types.ObjectId,
      ref: 'Etudiant',
    },
  },
  { timestamps: true }
)

const Compte = model<ICompte>('Compte', compteSchema, 'comptes')

export default Compte
