import {
  OneToMany,
  Entity,
  Column,
  ManyToOne,
} from "typeorm";
import { Post } from "./post";
import { emBase } from "./util/emBase";
import { User } from "./user";

@Entity("redit_votes")
export class Vote extends emBase {
  @Column()
  userVote: number;
  @ManyToOne(() => User, (user) => user.votes, { nullable: false })
  user: User;
  @ManyToOne(() => Post, (post) => post.votes, { nullable: false })
  post: Post;
}
