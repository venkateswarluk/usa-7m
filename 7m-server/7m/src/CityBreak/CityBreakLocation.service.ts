import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityBreakLocation } from './CityBreakLocation.entity';
import { CityBreakLocationReq } from '../dtos/citybreak';

@Injectable()
export class CityBreakLocationService {
  constructor(
    @InjectRepository(CityBreakLocation)
    private readonly cityBreakLocationRepository: Repository<CityBreakLocation>,
  ) {}

  async findAll(): Promise<CityBreakLocation[]> {
    return await this.cityBreakLocationRepository.find();
  }

  async findByCityId(cityId: number): Promise<CityBreakLocation> {
    return await this.cityBreakLocationRepository.findOne({ cityId: cityId });
  }

  async create(detailObj: CityBreakLocationReq) {
    return await this.cityBreakLocationRepository.save(detailObj);
  }
}
