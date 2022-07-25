import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home del server");
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`Server en el puerto  ${port}`);
});
