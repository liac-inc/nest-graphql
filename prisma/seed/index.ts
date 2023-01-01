import { seedCategories } from './categories';
import { PrismaClient } from '@prisma/client';
import { seedUsers } from './users';

const prisma = new PrismaClient();

const main = async () => {
  console.log(`Start seeding ...`);

  await seedCategories();
  await seedUsers();

  console.log(`Seeding finished.`);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
