import Item from '../src/models/Item'

export default async function ItemSeeder() {
  console.log(`ItemSeeder seeder started.`)
  try {
    await Item.deleteMany()
    for (let i = 0; i < 100; i++) {
      await Item.create({
        name: `Item ${i}`,
        description: `Description for Item ${i}`,
      })
    }

    console.log(`ItemSeeder seeded.`)
  } catch (error: any) {
    error.item = 'Error in Item Seeder: ' + error.item
    throw error
  }
}
