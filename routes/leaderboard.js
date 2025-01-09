import express from "express";
import {
  getLeaderboard,
  getUserRank,
} from "../controllers/leaderboardController.js";

export const leaderboardRouter = express.Router();

// Get global leaderboard
leaderboardRouter.get("/api/leaderboard", getLeaderboard);

// Get specific user's ranking
leaderboardRouter.get("/api/leaderboard/user/:userId", getUserRank);
