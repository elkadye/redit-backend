import {Entity,Column, ManyToMany, JoinTable, JoinColumn} from "typeorm"
import {Person} from "./person"
import {Client} from "./client"


@Entity('bankers')
export class Banker extends Person {

    @Column({
        unique: true,
        length:10
    })
    employeeNumber:string

    @Column({
        default: true,
        name:"active"
    })
    is_active: boolean

    @ManyToMany(
        ()=>Client
    )
    @JoinTable({
        name: "bankers_clients",
        joinColumn: {
            name:"banker",
            referencedColumnName:"id"
        },
        inverseJoinColumn: {
            name:"client",
            referencedColumnName:"id"
        }

    })
    clients:Client[]
}