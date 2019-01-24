import { Module } from '@nestjs/common';
import { MealsService } from './Meals.service';
import { MealTypeController } from './Meals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealType } from './Meals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MealType])],
  providers: [MealsService],
  controllers: [MealTypeController],
})
export class MealTypeModule {}
