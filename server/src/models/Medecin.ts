import { Schema, model } from 'mongoose'
import { IMedecin } from '@/types/models'

const medecinSchema = new Schema<IMedecin>(
  {
    nom: String,
    wilaya: String,
    commune: String,
  },
  { timestamps: true }
)

const Medecin = model<IMedecin>(
  'Medecin',
  medecinSchema,
  'medecins'
)

export default Medecin
