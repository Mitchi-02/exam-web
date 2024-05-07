import Etudiant from '../src/models/Etudiant'
import Compte from '../src/models/Compte'
import Passport from '../src/models/Passport'

export default async function EtudiantSeeder() {
  console.log(`EtudiantSeeder seeder started.`)
  try {
    await Promise.all([
      Etudiant.deleteMany(),
      Compte.deleteMany(),
      Passport.deleteMany(),
    ])
    for (let i = 0; i < 100; i++) {
      const t = await Etudiant.create({
        name: `Etudiant ${i}`,
        description: `Description for Etudiant ${i}`,
      })
      const data = i % 2 === 0 ? 5000 : 1000
      await Promise.all([
        Compte.create({
          solde: data,
          etudiant: t._id,
        }),
        Compte.create({
          solde: data + 5000,
          etudiant: t._id,
        }),
        Passport.create({
          passport_uid: `passport_etudiant${i}`,
          etudiant: t._id,
        }),
      ])
    }

    console.log(`EtudiantSeeder seeded.`)
  } catch (error: any) {
    error.etudiant = 'Error in Etudiant Seeder: ' + error.etudiant
    throw error
  }
}
