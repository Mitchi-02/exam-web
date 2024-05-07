import { ConnectOptions, connect, disconnect } from 'mongoose'
import { config } from 'dotenv'
import ItemSeeder from './ItemSeeder'
config()

async function main(seeders: (() => Promise<void>)[]) {
  await connect(process.env.DB_CONNECTION || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  console.log('Database connected.')

  for (const seeder of seeders) {
    await seeder()
  }
  await disconnect()
  console.log('Database disconnected.')
}

if(process.env.NODE_ENV !== 'production') {
  main([ItemSeeder])
}
