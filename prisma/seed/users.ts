import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedData: Prisma.UserCreateInput[] = [
  {
    firebaseUid: 'afhapdfuapfaupfapf',
  },
  {
    firebaseUid: 'ljajpfajpeajfapjfee',
  },
];

export const seedUsers = async () => {
  await prisma.user.createMany({ data: seedData });
};
