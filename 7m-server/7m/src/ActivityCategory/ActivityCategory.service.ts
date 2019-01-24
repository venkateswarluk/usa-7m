import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityCategory } from '../ActivityCategory/activitycategory.entity';

@Injectable()
export class ActivityCategoryService {
  constructor(
    @InjectRepository(ActivityCategory)
    private readonly categoryRepository: Repository<ActivityCategory>,
  ) {}

  async createCategory(categoryObj: ActivityCategory) {
    const getMaxId = await this.categoryRepository.query(
      `select Max(categoryid) as categoryId from sevenm.activitycategories`,
    );
    const [maxCat] = getMaxId;
    const category = {
      ...categoryObj,
      categoryId: maxCat.categoryid ? maxCat.categoryid : 1,
    };

    return await this.categoryRepository.save(category);
  }
}
