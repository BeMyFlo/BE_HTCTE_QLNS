import Express from "express";
import bodyParser from "body-parser";
import useDatabase from "./services/database.js";
import * as dotenv from "dotenv";
import useRoutes from "./routers/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import staffRouter from "./modules/staff/staff.route.js";
dotenv.config();

useDatabase();

const app = new Express();
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", Express.static("uploads"));
app.use("/api/staff", staffRouter);



app.listen(process.env.PORT || 8000, (error) => {
  if (!error) {
    console.log(`> Bpool is running on Port:${process.env.PORT}!`);
  }
});
