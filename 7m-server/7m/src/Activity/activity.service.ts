import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  async getMaxId() {
    const a = await this.activityRepository.query(
      `select Max(activityid) from sevenm.activities`,
    );
  }

  async createActivity(ActivityObj: Activity) {
    const getMaxIds = await this.activityRepository.query(
      `select Max(activityid) as activityId,Max(optionid) as optionId from sevenm.activities`,
    );
    const [act] = getMaxIds;
    const activity = {
      ...ActivityObj,
      activityId: act.activityid ? act.activityid + 1 : 1,
      optionId: act.optionid ? act.optionid + 1 : 1,
    };

    return await this.activityRepository.save(activity);
  }
}
