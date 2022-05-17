import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { User } from "./user";
import { Post } from "./post";

import {emBase} from "./util/emBase"



@Entity()
export class Comment extends emBase {
  @Column()
  body: string;

  @ManyToOne(() => User, (user) => user.comments, { nullable: false })
  user: User;

  @ManyToOne(() => Post, (post) => post.comments, { nullable: false })
  post: Post;
}

