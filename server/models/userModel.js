import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
    },
    password: {
      type: String,
      // required: true,
    },
    role: {
      type: String,
      // required: true,
      default: "user",
    },
    phone: {
      type: Number,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);
