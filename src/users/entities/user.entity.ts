import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 100 })
  name: string;

  @Column({ name: 'last_name', type: 'varchar', length: 100 })
  last_name: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 11, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ nullable: true })
  image: string;

  @Column({ name: 'accept_terms_and_privacy_politics' })
  accept_terms_and_privacy_politics: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
