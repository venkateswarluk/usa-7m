import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MealType } from './Meals.entity';
import { MealtypeReq1 } from '../dtos/mealtype';

@Injectable()
export class MealsService {
  constructor(
    @InjectRepository(MealType)
    private readonly mealTypeRepository: Repository<MealType>,
  ) {}

  async findAll(): Promise<MealType[]> {
    return await this.mealTypeRepository.find();
  }

  async create(mealObj: MealtypeReq1) {
    return await this.mealTypeRepository.save(mealObj);
  }
}
