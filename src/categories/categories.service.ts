import { CategoriesRepository } from './categories.repository';
import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  findAll() {
    const res = this.categoriesRepository.findAll();

    return res;
  }

  findOne(id: string) {
    const res = this.categoriesRepository.findOne(id);

    return res;
  }

  create(createCategoryInput: CreateCategoryInput) {
    const res = this.categoriesRepository.create(createCategoryInput);

    return res;
  }

  update(id: string, updateCategoryInput: UpdateCategoryInput) {
    const res = this.categoriesRepository.update(id, updateCategoryInput);

    return res;
  }

  remove(id: string) {
    const res = this.categoriesRepository.remove(id);

    return res;
  }
}
