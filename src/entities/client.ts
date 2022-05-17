import {Entity,Column, OneToMany, ManyToMany} from "typeorm"
import {Person} from "./person"
import { Transaction } from "./transaction";
import { Banker } from "./banker";


@Entity("clients")
export class Client extends Person {
  @Column({
    type: "numeric",
  })
  balance: number;

  @Column({
    default: true,
    name: "active",
  })
  is_active: boolean;

  @Column({
    unique: true,
    length: 10,
  })
  cardNumber: string;

  @Column({
    type: "simple-json",
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transaction: Transaction[];

  @ManyToMany(() => Banker)
  bankers: Banker[];
}