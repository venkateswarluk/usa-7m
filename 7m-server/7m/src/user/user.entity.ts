import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column('text')
  email: string;

  @Column('text') password: string;

  @Column({ name: 'emailconfirmed' }) emailConfirmed: boolean;

  @Column('text') roles: string[];

  @Column('date', {
    name: 'createddatetime',
    default: () => 'now()',
  })
  createdAt: string;

  @Column('date', {
    name: 'modifieddatetime',
    default: () => 'now()',
  })
  modifiedAt: string;

  @Column('int', {
    name: 'createdoperatorid',
    default: 1,
  })
  createdBy: number;

  @Column('int', {
    name: 'modifiedoperatorid',
    default: 1,
  })
  modifiedBy: number;

  @Column({ name: 'isactive', default: true })
  isActive: boolean;

  @Column('text')
  role: string;
}
