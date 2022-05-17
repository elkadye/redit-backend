import {
  OneToMany,
  Entity,
  Column,
} from "typeorm";
import { Post } from "./post";
import { Comment } from "./comment";

import { emBase } from "./util/emBase";

@Entity("redit_tags")
export class Tag extends emBase {
  @Column()
  name: string;

}
