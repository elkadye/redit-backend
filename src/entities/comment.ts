import {
  Entity,
  Column,
  ManyToOne,
  JoinTable,
  ManyToMany
} from "typeorm";
import { User } from "./user";
import { Post } from "./post";

import {emBase} from "./util/emBase"
import { Tag } from "./tag";



@Entity("redit_comments")
export class Comment extends emBase {
  @Column()
  body: string;

  @ManyToOne(() => User, (user) => user.comments, { nullable: false })
  user: User;

  @ManyToOne(() => Post, (post) => post.comments, { nullable: false })
  post: Post;

 
}

