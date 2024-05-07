import Medecin from '@/models/Medecin'
import { Response, Request } from 'express'

export async function index(
  req: Request<
    any,
    any,
    any,
    {
      nom?: string
      wilaya?: string
    }
  >,
  res: Response
) {
  const query: {
    nom?: string
    wilaya?: string
  } = {}
  if (req.query.nom) {
    query.nom = req.query.nom
  }
  if (req.query.wilaya) {
    query.wilaya = req.query.wilaya
  }

  res.status(200).json({
    data: await Medecin.find(query),
  })
}

export async function store(
  req: Request<
    never,
    never,
    {
      nom: string
      wilaya: string
      commune: string
    }
  >,
  res: Response
) {
  res.status(201).json({
    data: await Medecin.create(req.body),
  })
}
