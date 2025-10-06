import { timeStamp } from "console";
import mongoose from "mongoose";
import { deflate } from "zlib";

const shopOrderItemSchema = new mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true
    },
    price: Number,
    quantity: Number
  },
  { timestamps: true }
);

const shopOrderSchema = new mongoose.Schema(
  {
    shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    subtotal: Number,
    shopOrderItems: [shopOrderItemSchema]
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    paymentMethod: {
      type: String,
      enum: ["cod", "online"],
      required: true
    },
    deliveryAddress: {
      text: String,
      latitude: Number,
      longitude: Number
    },
    totalAmount: {
      type: Number
    },
    shopOrder: [shopOrderSchema]
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
