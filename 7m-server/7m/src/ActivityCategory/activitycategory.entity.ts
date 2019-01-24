import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';

@Entity({ schema: 'sevenm', name: 'activitycategories' })
export class ActivityCategory {
  @PrimaryColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column('text', { name: 'servicetype' })
  serviceType: string;

  @Column('text', { name: 'categoryname' })
  categoryName: string;

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

  @Column('int', { name: 'categoryid' })
  categoryId: number;
}
