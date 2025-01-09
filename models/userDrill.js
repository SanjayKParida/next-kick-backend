import mongoose from "mongoose";

const userDrillSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  drillId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Drill",
    required: true,
  },
  completedCount: {
    type: Number,
    required: true,
    min: 0,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export const UserDrill = mongoose.model("UserDrill", userDrillSchema);
