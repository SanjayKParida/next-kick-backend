import mongoose from "mongoose";

const drillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  totalCount: {
    type: Number,
    required: true,
    min: 1,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Drill = mongoose.model("Drill", drillSchema);
