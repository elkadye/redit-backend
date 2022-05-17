
import { config } from "dotenv";
import { DataSource } from "typeorm";
import { Comment } from "./entities/comment";
import { Post } from "./entities/post";
import { Tag } from "./entities/tag";
import { User } from "./entities/user";
import { Vote } from "./entities/vote";

config()
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Comment,Post, Tag, User, Vote],
  migrations: [],
  subscribers: [],
});

export default AppDataSource

