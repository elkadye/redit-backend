import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { emBase } from "./util/emBase";
import { User } from "./user";
import {Comment} from "./comment"



@Entity()
export class Post extends emBase {
  @Column()
  title: string;

  @Column()
  body: string;

  @ManyToOne(() => User, (user) => user.posts, { nullable: false })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}

