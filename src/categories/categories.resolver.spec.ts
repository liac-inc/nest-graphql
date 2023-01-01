import { PrismaService } from 'src/lib/prisma.service';
import { CategoriesRepository } from './categories.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesResolver } from './categories.resolver';
import { CategoriesService } from './categories.service';

describe('CategoriesResolver', () => {
  let resolver: CategoriesResolver;

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
  });

  it('should be defined', () => {
    console.log('resolver', resolver);
    expect(resolver).toBeDefined();
  });
});
