import mongoose, { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  name: string;
  lastName: string;
  phone: string;
  address: string;
  wilaya: string;

  productname: string;
  price: number;
  quantity: number;

  deliveryType: "home" | "office";
  deliveryPrice: number;
  totalPrice: number;

  status: "confirmed" | "unconfirmed";

  createdAt: Date;
  updatedAt: Date;
}

const orderSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    wilaya: { type: String, required: true },

    productname: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },

    deliveryType: {
      type: String,
      enum: ["home", "office"],
      required: true,
    },

    deliveryPrice: { type: Number, required: true },

    totalPrice: { type: Number, required: true },

    status: {
      type: String,
      enum: ["confirmed", "unconfirmed"],
      default: "unconfirmed",
    },
  },
  { timestamps: true },
);

export default mongoose.model<IOrder>("Order", orderSchema);
