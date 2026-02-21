import mongoose, { Schema, Document } from "mongoose";

export interface IWilaya extends Document {
  name: string;
  deliveryPrice: number;
}

const wilayaSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    deliveryPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IWilaya>("Wilaya", wilayaSchema);
