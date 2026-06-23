import { PrismaClient } from '../src/generated/prisma'

if (process.env.SEED_ALLOWED !== 'true') {
  console.error('Seeding is not allowed. Set SEED_ALLOWED=true to run seeds.')
  process.exit(1)
}

const prisma = new PrismaClient()

async function main() {
  await prisma.rockies_players.createMany({
    data: [
      { name: 'Kris Bryant', position: 'OF', jersey_number: 23, batting_avg: 0.265, home_runs: 18, weight: 215 },
      { name: 'Ryan McMahon', position: '3B', jersey_number: 24, batting_avg: 0.241, home_runs: 15, weight: 185 },
      { name: 'Charlie Blackmon', position: 'OF', jersey_number: 19, batting_avg: 0.270, home_runs: 12, weight: 210 },
      { name: 'Ezequiel Tovar', position: 'SS', jersey_number: 14, batting_avg: 0.257, home_runs: 11, weight: 175 },
      { name: 'Brenton Doyle', position: 'OF', jersey_number: 9, batting_avg: 0.248, home_runs: 20, weight: 200 },
    ],
  })

  console.log('Seeded rockies_players.')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
