import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';

@Entity({ name: 'citybreakdetails' })
export class CityBreakDetail {
  @PrimaryColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column('int', { name: 'cityid' })
  cityId: number;

  @Column('int')
  days: number;

  @Column('int', { name: 'dayno' })
  dayNo: number;

  @Column('text', { name: 'dayinfo' })
  dayInfo: string;

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
