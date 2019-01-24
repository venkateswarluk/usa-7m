import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';

@Entity({ schema: 'sevenm', name: 'activityoptions' })
export class ActivityOption {
  @PrimaryColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column('integer', { name: 'activityoptionid' })
  activityOptionId: number;

  @Column('text', { name: 'typeval' })
  typeVal: string;

  @Column('text', { name: 'typedescription' })
  typeDescription: string;

  @Column('text')
  name: string;

  @Column('integer', { name: 'activityid' })
  activityId: number;

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
}
