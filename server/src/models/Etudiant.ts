import { Schema, model } from 'mongoose'
import { IEtudiant } from '@/types/models'

const etudiantSchema = new Schema<IEtudiant>(
  {
    name: String,
    description: String,
  },
  { timestamps: true }
)

const Etudiant = model<IEtudiant>(
  'Etudiant',
  etudiantSchema,
  'etudiants'
)

export default Etudiant
