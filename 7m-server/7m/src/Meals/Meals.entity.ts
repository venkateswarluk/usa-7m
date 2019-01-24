import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';

@Entity({ name: 'mealtypes' })
export class MealType {
  @PrimaryColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text', { name: 'mealtype' })
  mealType: string;

  @Column('text', { name: 'imageurl' })
  imageUrl: string;

  @Column('text')
  description: string;

  @Column('numeric')
  price: number;

  @Column('text')
  items: string[];

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
