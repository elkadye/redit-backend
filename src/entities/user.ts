import {
  OneToMany,
  Entity,
  Column,
} from "typeorm";
import { Post } from "./post";
import { Comment } from "./comment";

import { emBase } from "./util/emBase";
import { Vote } from "./vote";

@Entity("redit_users")
export class User extends emBase {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column()
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[];
}
