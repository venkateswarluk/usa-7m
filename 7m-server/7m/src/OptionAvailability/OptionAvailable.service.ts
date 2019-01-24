import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OptionAvailability } from '../OptionAvailability/optionavailability.entity';

@Injectable()
export class OptionAvailabilityService {
  constructor(
    @InjectRepository(OptionAvailability)
    private readonly availabilityRepository: Repository<OptionAvailability>,
  ) {}

  async createOptionAvailability(ActivityObj: OptionAvailability) {
    console.log(ActivityObj);
    const getMaxIds = await this.availabilityRepository.query(
      `select Max(optionAvailabilityId) as optionAvailabilityId,
      Max(activityId) as activityId,
      Max(optionId) as optionId from sevenm.optionavailabilities`,
    );
    const [act] = getMaxIds;
    console.log(act);
    const optionAvailability = {
      ...ActivityObj,
      optionAvailabilityId: act.optionavailabilityid
        ? act.optionavailabilityid + 1
        : 1,
      optionId: act.optionid ? act.optionid + 1 : 1,
      activityId: act.activityid ? act.activityid + 1 : 1,
    };
    return await this.availabilityRepository.save(optionAvailability);
  }
}
