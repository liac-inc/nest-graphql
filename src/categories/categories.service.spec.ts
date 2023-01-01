import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/lib/prisma.service';

import { CategoriesRepository } from './categories.repository';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService, CategoriesRepository, PrismaService],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
