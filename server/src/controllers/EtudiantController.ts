import Etudiant from '@/models/Etudiant'
import { Response, Request } from 'express'
import { Types } from 'mongoose'

export async function index(_: Request, res: Response) {
  res.status(200).json({
    data: await Etudiant.aggregate([
      {
        $lookup: {
          from: 'passports',
          localField: '_id',
          foreignField: 'etudiant',
          as: 'passports',
        },
      },
    ]),
  })
}

export async function some(req: Request, res: Response) {
  res.status(200).json({
    data: await Etudiant.aggregate([
      {
        $lookup: {
          from: 'comptes',
          localField: '_id',
          foreignField: 'etudiant',
          as: 'comptes',
        },
      },
      {
        $match: {
          comptes: {
            $not: {
              $elemMatch: {
                solde: {
                  $lt: parseFloat(req.query.solde as string),
                },
              },
            },
          },
        },
      },
      {
        $project: {
          name: 1,
        },
      },
    ]),
  })
}

export async function show(req: Request<{ id: string }>, res: Response) {
  console.log(req.params.id)
  res.status(200).json({
    data:
      (
        await Etudiant.aggregate([
          {
            $match: {
              _id: new Types.ObjectId(req.params.id),
            },
          },
          {
            $lookup: {
              from: 'comptes',
              localField: '_id',
              foreignField: 'etudiant',
              as: 'comptes',
            },
          },
          {
            $lookup: {
              from: 'passports',
              localField: '_id',
              foreignField: 'etudiant',
              as: 'passports',
            },
          },
        ])
      )[0] ?? null,
  })
}

export async function store(
  req: Request<
    never,
    never,
    {
      name: string
      description: string
    }
  >,
  res: Response
) {
  res.status(201).json({
    data: await Etudiant.create(req.body),
  })
}

export async function update(
  req: Request<
    { id: string },
    never,
    {
      name: string
      description: string
    }
  >,
  res: Response
) {
  res.status(201).json({
    data: await Etudiant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }),
  })
}

export async function destroy(req: Request<{ id: string }>, res: Response) {
  res.status(200).json({
    data: await Etudiant.findByIdAndDelete(req.params.id),
  })
}
