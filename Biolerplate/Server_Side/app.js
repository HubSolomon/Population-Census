
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import loginRoute from "./routes/loginRoute.js";
import registerRoute from "./routes/registerRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/login", loginRoute);
app.use("/register", registerRoute);




mongoose
  .connect("mongodb+srv://Pc-DB-User:iARzPkdiHDRZyG9C@pc-db.sutnz8g.mongodb.net/GhanaDataBase")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error", err);
  });

app.listen(5002, (req, res) => {
  console.log("listening on port 5002");
});
