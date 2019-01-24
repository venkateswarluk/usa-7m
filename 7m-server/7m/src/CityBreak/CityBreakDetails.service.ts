import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityBreakDetail } from './CityBreakDetails.entity';
import { CityBreakDetailsReq } from '../dtos/citybreak';

@Injectable()
export class CityBreakDetailsService {
  constructor(
    @InjectRepository(CityBreakDetail)
    private readonly cityBreakRepository: Repository<CityBreakDetail>,
  ) {}

  async findAll(): Promise<CityBreakDetail[]> {
    return await this.cityBreakRepository.find();
  }

  async create(detailObj: CityBreakDetailsReq) {
    return await this.cityBreakRepository.save(detailObj);
  }
}
