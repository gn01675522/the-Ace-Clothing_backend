import mongoose from "mongoose";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI not defined in .env");

mongoose.connect(uri);

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});
db.once("open", () => {
  console.log("mongoose connect!");
});

module.exports = db;
