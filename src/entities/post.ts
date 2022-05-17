import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable
} from "typeorm";
import { emBase } from "./util/emBase";
import { User } from "./user";
import {Comment} from "./comment"
import { Vote } from "./vote";
import { Tag } from "./tag";




@Entity("redit_posts")
export class Post extends emBase {
  @Column()
  title: string;

  @Column()
  body: string;
  
  @Column()
  imageUrl:string


  @ManyToOne(() => User, (user) => user.posts, { nullable: false })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[];

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}

