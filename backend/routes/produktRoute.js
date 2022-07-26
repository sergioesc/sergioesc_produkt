import express from "express";
import Produkt from "../models/produktModel.js";
import expressAsyncHandler from "express-async-handler";
import { isAuth, isAdmin } from "../utils.js";

const produktRouter = express.Router();

produktRouter.get("/", async (req, res) => {
  const produkts = await Produkt.find();
  res.send(produkts);
});

produktRouter.get("/produkt/:id", async (req, res) => {
  const produktId = await Produkt.findById(req.params.id);
  if (produktId) {
    res.send(produktId);
  } else {
    res.status(404).send({ message: "El producto no existe" });
  }
});

produktRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newProdukt = new Produkt({
      name: req.body.name,
      autor: req.body.autor,
      images: req.body.images,
      category: req.body.category,
      description: req.body.description,
      description1: req.body.description1,
      externalLink: req.body.externalLink,
      rating: 0,
      comentaries: 0,
    });
    const produkt = await newProdukt.save();
    res.send({ message: "Producto creado", produkt });
  })
);

export default produktRouter;