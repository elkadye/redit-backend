import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import {Client} from "./client"

export enum TransactionTypes{
    DEPOSIT="deposit",
    WITHDRAW="withdraw"
}

@Entity("transactions")
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({
      type:"enum",
      enum: TransactionTypes
  })
  type: string;

  @Column({
      type:"numeric"
  })
  amount: number;

  @ManyToOne(
      ()=>Client, 
      client=>client.transaction
  )

  @JoinColumn({
      name: "client_id"
  })
  client: Client;



}