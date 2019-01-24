import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityBreakExclusion } from './CityBreakExclusion.entity';
import { CityBreakExclusionReq } from '../dtos/citybreak';

@Injectable()
export class CityBreakExclusionService {
  constructor(
    @InjectRepository(CityBreakExclusion)
    private readonly cityBreakRepository: Repository<CityBreakExclusion>,
  ) {}

  async findAll(): Promise<CityBreakExclusion[]> {
    return await this.cityBreakRepository.find();
  }

  async create(exclusionObj: CityBreakExclusionReq) {
    return await this.cityBreakRepository.save(exclusionObj);
  }
}
