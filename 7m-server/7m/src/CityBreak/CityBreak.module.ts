import { Module } from '@nestjs/common';
import { CityBreakService } from './CityBreak.service';
import { CityBreakDetailsService } from './CityBreakDetails.service';
import { CityBreakInclusionService } from './CityBreakInclusion.service';
import { CityBreakExclusionService } from './CityBreakExclusion.service';
import { CityBreakLocationService } from './CityBreakLocation.service';

import { CityBreakController } from './CityBreak.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityBreak } from './CityBreak.entity';
import { CityBreakDetail } from './CityBreakDetails.entity';
import { CityBreakInclusion } from './CityBreakInclusion.entity';
import { CityBreakExclusion } from './CityBreakExclusion.entity';
import { CityBreakLocation } from './CityBreakLocation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CityBreak,
      CityBreakDetail,
      CityBreakInclusion,
      CityBreakExclusion,
      CityBreakLocation,
    ]),
  ],
  providers: [
    CityBreakService,
    CityBreakDetailsService,
    CityBreakInclusionService,
    CityBreakExclusionService,
    CityBreakLocationService,
  ],
  controllers: [CityBreakController],
})
export class CityBreakModule {}
