import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: "name", type: "varchar", length: 100 })
  name: string;

  @Column({name: "last_name", type: "varchar", length: 100})
  lastName: string;

  @Column({ type: "varchar", length: 100, unique: true})
  email: string;

  @Column({ type: "varchar", length: 11, nullable: true })
  phone: string;

  @Column({ type: "varchar", length: 100 })
  password: string;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn({ name: 'accept_terms' })
  acceptTerms: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
}