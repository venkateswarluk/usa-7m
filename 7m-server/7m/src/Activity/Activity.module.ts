import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityCategory } from '../ActivityCategory/activitycategory.entity';
import { ActivityDetail } from '../ActivityDetail/activitydetail.entity';
import { ActivityOption } from '../ActivityOption/activityoption.entity';
import { OptionAvailability } from '../OptionAvailability/optionavailability.entity';

import { ActivityCategoryService } from '../ActivityCategory/ActivityCategory.service';
import { ActivityDetailService } from '../ActivityDetail/activityDetails.service';
import { ActivityOptionService } from '../ActivityOption/activityOption.service';
import { OptionAvailabilityService } from '../OptionAvailability/OptionAvailable.service';

import { ActivityController } from './activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './activity.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Activity,
      ActivityCategory,
      ActivityDetail,
      ActivityOption,
      OptionAvailability,
    ]),
  ],
  providers: [
    ActivityService,
    ActivityCategoryService,
    ActivityDetailService,
    ActivityOptionService,
    OptionAvailabilityService,
  ],
  controllers: [ActivityController],
})
export class ActivitiesModule {}
