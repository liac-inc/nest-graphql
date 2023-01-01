import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoriesRepository {
  constructor(private prisma: PrismaService) {}

  findAll() {
    const res = this.prisma.category.findMany();

    return res;
  }

  findOne(id: string) {
    const res = this.prisma.category.findUnique({
      where: { id },
    });

    return res;
  }

  create(createCategoryInput: CreateCategoryInput) {
    const res = this.prisma.category.create({
      data: createCategoryInput,
    });

    return res;
  }

  update(id: string, updateCategoryInput: UpdateCategoryInput) {
    const res = this.prisma.category.update({
      where: { id },
      data: updateCategoryInput,
    });

    return res;
  }

  remove(id: string) {
    const res = this.prisma.category.delete({
      where: { id },
    });

    return res;
  }
}
