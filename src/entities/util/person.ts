import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Person extends BaseEntity {
 
    @PrimaryGeneratedColumn()
    id:number
   
    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @Column()
    firstName: string;

    @Column()
    lastName: string

    @Column({
        unique: true
    })
    email: string

    
}