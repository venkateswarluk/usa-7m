import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CityBreakService } from './CityBreak.service';
import { CityBreakDetailsService } from './CityBreakDetails.service';
import { CityBreakInclusionService } from './CityBreakInclusion.service';
import { CityBreakExclusionService } from './CityBreakExclusion.service';
import { CityBreakLocationService } from './CityBreakLocation.service';
import { CityBreak } from './CityBreak.entity';
import { CityBreakDetail } from './CityBreakDetails.entity';
import { CityBreakInclusion } from './CityBreakInclusion.entity';
import { CityBreakExclusion } from './CityBreakExclusion.entity';

import {
  CityBreakCreateRequest,
  CityBreakReq,
  CityBreakDetailsRequest,
  CityBreakDetailsReq,
  CityBreakInclusionReq,
  CityBreakInclusionRequest,
  CityBreakExclusionRequest,
  CityBreakExclusionReq,
} from '../dtos/citybreak';
import { validateRequest } from '../utils/validation';
import { AuthGuard } from '@nestjs/passport';

@Controller('cityBreak')
export class CityBreakController {
  constructor(
    private readonly cityBreakService: CityBreakService,
    private readonly cityBreakDetailsService: CityBreakDetailsService,
    private readonly cityBreakInclusionService: CityBreakInclusionService,
    private readonly cityBreakExclusionService: CityBreakExclusionService,
    private readonly cityBreakLocationService: CityBreakLocationService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<CityBreak[]> {
    return this.cityBreakService.findAll();
  }

  @Post('/cityBreak')
  async create(@Body() createCityBreak: CityBreakReq) {
    const validRes = validateRequest(createCityBreak, CityBreakCreateRequest);
    if (validRes.isValid) {
      const getCity = await this.cityBreakLocationService.findByCityId(
        createCityBreak.cityId,
      );
      const createObj = { ...createCityBreak, city: getCity.city };

      await this.cityBreakService.create(createObj);
    } else {
      return validRes.errors;
    }
  }

  @Post('/details')
  async createDetails(@Body() details: CityBreakDetailsReq) {
    const validRes = validateRequest(details, CityBreakDetailsRequest);
    if (validRes.isValid) {
      await this.cityBreakDetailsService.create(details);
    } else {
      return validRes.errors;
    }
  }

  @Post('/inclusion')
  async createInclusion(@Body() inclusion: CityBreakInclusionReq) {
    const validRes = validateRequest(inclusion, CityBreakInclusionRequest);
    if (validRes.isValid) {
      await this.cityBreakInclusionService.create(inclusion);
    } else {
      return validRes.errors;
    }
  }

  @Post('/exclusion')
  async createExclusion(@Body() exclusion: CityBreakExclusionReq) {
    const validRes = validateRequest(exclusion, CityBreakExclusionRequest);
    if (validRes.isValid) {
      await this.cityBreakExclusionService.create(exclusion);
    } else {
      return validRes.errors;
    }
  }
}
