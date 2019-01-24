import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityBreak } from './CityBreak.entity';
import { CityBreakReq } from '../dtos/citybreak';

@Injectable()
export class CityBreakService {
  constructor(
    @InjectRepository(CityBreak)
    private readonly cityBreakRepository: Repository<CityBreak>,
  ) {}

  async findAll(): Promise<CityBreak[]> {
    return await this.cityBreakRepository.find();
  }

  async create(mealObj: CityBreakReq) {
    return await this.cityBreakRepository.save(mealObj);
  }
}
