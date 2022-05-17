import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class emBase extends BaseEntity {
 
    @PrimaryGeneratedColumn()
    id:number
   
    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date    
}