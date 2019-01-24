import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';

@Entity({ schema: 'sevenm', name: 'activitydetails' })
export class ActivityDetail {
  @PrimaryColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column('int', { name: 'activitydetailid' })
  activityDetailId: number;

  @Column('int', { name: 'activityid' })
  activityId: number;

  @Column('text', { name: 'shortdescription' })
  shortDescription: string;

  @Column('text', { name: 'longdescription' })
  longDescription: string;

  @Column('text', { array: true })
  images: string[];

  @Column('text', { array: true })
  videos: string[];

  @Column('date', {
    name: 'createdat',
    default: () => 'now()',
  })
  createdAt: string;

  @Column('date', {
    name: 'modifiedat',
    default: () => 'now()',
  })
  modifiedAt: string;

  @Column({
    name: 'createdby',
    default: '0a6e477f-d6ce-42d8-bbed-825eda37372e',
  })
  @Generated('uuid')
  createdBy: string;

  @Column({
    name: 'modifiedby',
    default: '0a6e477f-d6ce-42d8-bbed-825eda37372e',
  })
  @Generated('uuid')
  modifiedBy: string;

  @Column({ name: 'isactive', default: true })
  isActive: boolean;
  @Column('text', { name: 'activityphone' })
  activityPhone: string;
}
