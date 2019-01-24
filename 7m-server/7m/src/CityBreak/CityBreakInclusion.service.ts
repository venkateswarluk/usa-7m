import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityBreakInclusion } from './CityBreakInclusion.entity';
import { CityBreakInclusionReq } from '../dtos/citybreak';

@Injectable()
export class CityBreakInclusionService {
  constructor(
    @InjectRepository(CityBreakInclusion)
    private readonly cityBreakRepository: Repository<CityBreakInclusion>,
  ) {}

  async findAll(): Promise<CityBreakInclusion[]> {
    return await this.cityBreakRepository.find();
  }

  async create(inclusionObj: CityBreakInclusionReq) {
    return await this.cityBreakRepository.save(inclusionObj);
  }
}
