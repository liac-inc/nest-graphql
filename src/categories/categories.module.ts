import { CategoriesRepository } from './categories.repository';
import { PrismaService } from './../lib/prisma.service';
import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';

@Module({
  providers: [
    CategoriesResolver,
    CategoriesService,
    CategoriesRepository,
    PrismaService,
  ],
})
export class CategoriesModule {}
