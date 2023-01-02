import { PrismaService } from 'src/lib/prisma.service';
import { CategoriesRepository } from './categories.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesResolver } from './categories.resolver';
import { CategoriesService } from './categories.service';

describe('CategoriesResolver', () => {
  let resolver: CategoriesResolver;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesResolver,
        CategoriesService,
        CategoriesRepository,
        PrismaService,
      ],
    }).compile();

    resolver = module.get<CategoriesResolver>(CategoriesResolver);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterAll(async () => {
    await prismaService.$disconnect();
  });

  it('should be defined', () => {
    console.log('resolver', resolver);
    expect(resolver).toBeDefined();
  });
});
