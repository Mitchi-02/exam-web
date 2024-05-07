import Medecin from '../src/models/Medecin'

export default async function MedecinSeeder() {
  console.log(`MedecinSeeder seeder started.`)
  try {
    await Medecin.deleteMany()
    await Medecin.create({
      nom: 'mohamed',
      wilaya: 'sba',
      commune: 'telagh',
    })
    await Medecin.create({
      nom: 'fatima',
      wilaya: 'oran',
      commune: 'oran',
    })
    await Medecin.create({
      nom: 'mohamed',
      wilaya: 'oran',
      commune: 'oran',
    })

    console.log(`Medecin Seeder seeded.`)
  } catch (error: any) {
    error.medecin = 'Error in Medecin Seeder: ' + error.medecin
    throw error
  }
}
