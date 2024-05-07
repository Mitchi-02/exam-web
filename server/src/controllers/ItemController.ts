import Item from '@/models/Item'
import { NextFunction, Response, Request } from 'express'

export async function index(req: Request, res: Response) {
  res.status(200).json({
    data: await Item.find(),
  })
}

export async function show(req: Request<{ id: string }>, res: Response) {
  res.status(200).json({
    data: await Item.findById(req.params.id),
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
    data: await Item.create(req.body),
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
    data: await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }),
  })
}

export async function destroy(req: Request<{ id: string }>, res: Response) {
  res.status(200).json({
    data: await Item.findByIdAndDelete(req.params.id),
  })
}
