
import { config } from "dotenv";
import { DataSource } from "typeorm";

config()
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});

export default AppDataSource

