import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityDetail } from '../ActivityDetail/activitydetail.entity';

@Injectable()
export class ActivityDetailService {
  constructor(
    @InjectRepository(ActivityDetail)
    private readonly detailRepository: Repository<ActivityDetail>,
  ) {}

  async createActivityDetail(ActivityObj: ActivityDetail) {
    console.log(ActivityObj);

    const getMaxIds = await this.detailRepository.query(
      `select Max(activityDetailId) as detailId,Max(activityId) as activityId from sevenm.activitydetails`,
    );
    const [act] = getMaxIds;
    console.log(act);
    const activityDetail = {
      ...ActivityObj,
      activityDetailId: act.detailid ? act.detailid + 1 : 1,
      activityId: act.activityid ? act.activityid + 1 : 1,
    };

    return await this.detailRepository.save(activityDetail);
  }
}
