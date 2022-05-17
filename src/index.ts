import cors from "cors";
import dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import morgan from "morgan";
import AppDataSource from "./data-source";

dotenv.config();
// console.log(process.env)
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

app.listen(process.env.PORT || 8081, async () => {
  console.log("App now running on port 8081");
  try{
  await AppDataSource.initialize();
  console.log("connected to DB");
  }catch(e){
      console.log(e)
  }
});

app.get("/", function (req, res) {
  res.send("Server is running");
});
