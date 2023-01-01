import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedData: Prisma.CategoryCreateInput[] = [
  {
    name: 'グルメ',
    iconUrl: 'https://img.icons8.com/ios/50/000000/restaurant.png',
  },
  {
    name: '宅配\nテイクアウト',
    iconUrl: 'https://img.icons8.com/ios/50/000000/restaurant.png',
  },
];

export const seedCategories = async () => {
  await prisma.category.createMany({ data: seedData });
};
