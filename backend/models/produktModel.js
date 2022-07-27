import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
});

const produktSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    autor: { type: String, required: true },
    images: { type: Array, required: true },
    category: { type: String },
    description: { type: String, required: true },
    description1: { type: String, required: true },
    externalLink: { type: String },
    rating: { type: Number, required: true},
    comentaries: [commentSchema],
  },
  {
    timestamps: true,
  }
);

const Produkt = mongoose.model("Produkt", produktSchema);
export default Produkt;
