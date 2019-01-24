import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';

@Entity({ schema: 'sevenm', name: 'activities' })
export class Activity {
  @PrimaryColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column('text', { name: 'activityname' })
  activityName: string;

  @Column('text')
  description: string;

  @Column('numeric')
  stars: number;

  @Column('text', { name: 'thumburl' })
  thumbUrl: string;

  @Column('int', { name: 'minchildage' })
  minChildAge: number;

  @Column('int', { name: 'maxchildage' })
  maxChildAge: number;

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

  @Column('int', { name: 'destinationid' })
  destinationId: number;

  @Column('int', { name: 'categoryid' })
  categoryId: number;

  @Column('int', { name: 'activityid' })
  activityId: number;

  @Column('int', { name: 'optionid' })
  optionId: number;
}
