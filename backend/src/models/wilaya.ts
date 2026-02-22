import mongoose, { Schema, Document } from "mongoose";

export interface IWilaya extends Document {
  name: string;
  deliveryOfficePrice: number;
  deliveryHomePrice: number;
}

const wilayaSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    deliveryOfficePrice: { type: Number, required: true },
    deliveryHomePrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IWilaya>("Wilaya", wilayaSchema);
