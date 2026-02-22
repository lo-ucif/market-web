import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  quantity: number;
  description: string;
  img: string;
}

const productSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    description: { type: String },
    img: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IProduct>("Product", productSchema);
