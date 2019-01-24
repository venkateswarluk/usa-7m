import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';

@Entity({ name: 'citybreaks' })
export class CityBreak {
  @PrimaryColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column('int', { name: 'cityid' })
  cityId: number;

  @Column('text')
  city: string;

  @Column('int')
  days: number;

  @Column('text')
  description: string;

  @Column('numeric')
  price: number;

  @Column('text', { name: 'imageurl' })
  imageUrl: string;

  @Column('text')
  phone: string;

  @Column('numeric', { name: 'starrating' })
  starRating: number;

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
