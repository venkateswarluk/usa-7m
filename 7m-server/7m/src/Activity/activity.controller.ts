import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityCategoryService } from '../ActivityCategory/ActivityCategory.service';
import { ActivityDetailService } from '../ActivityDetail/activityDetails.service';
import { ActivityOptionService } from '../ActivityOption/activityOption.service';
import { OptionAvailabilityService } from '../OptionAvailability/OptionAvailable.service';
import * as uuid from 'uuid';

@Controller('sevenm/activity')
export class ActivityController {
  constructor(
    private readonly activityService: ActivityService,
    private readonly activityCategoryService: ActivityCategoryService,
    private readonly activityDetailService: ActivityDetailService,
    private readonly activityOptionService: ActivityOptionService,
    private readonly optionAvailabilityService: OptionAvailabilityService,
  ) {}

  // @Get()
  // findAll(): Promise<ActivityCategory[]> {
  //   return this.activityService.findAll();
  // }

  // @Post()
  // async create(@Body() createActivityCategory) {
  //   const validRes = validateRequest(
  //     createActivityCategory,
  //     CreateActivityCategoryRequest
  //   );
  //   if (validRes.isValid) {
  //     await this.activityService.create(createActivityCategory);
  //   } else {
  //     return validRes.errors;
  //   }
  // }

  @Post()
  async createActivity(@Body() createActivityCategory) {
    console.log(createActivityCategory);

    const a = await this.activityService.createActivity(
      createActivityCategory.activity,
    );
    // const c = await this.activityCategoryService.createCategory(
    //   createActivityCategory.category,
    // );
    const d = await this.activityDetailService.createActivityDetail(
      createActivityCategory.activityDetails,
    );
    const o = await this.activityOptionService.createActivityOption(
      createActivityCategory.activityOptions,
    );
    const oa = await this.optionAvailabilityService.createOptionAvailability(
      createActivityCategory.optionAvailabilities,
    );

    return 'a';
  }
}
