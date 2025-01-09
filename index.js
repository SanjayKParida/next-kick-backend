import express from "express";
import { connectDb } from "./db/db.js";
import dotenv from "dotenv";
import cors from "cors";
import { authRouter } from "./routes/auth.js";
import { drillRouter } from "./routes/drill.js";
import { leaderboardRouter } from "./routes/leaderboard.js";

//IMPORTING ENVIRONMENTAL CONFIGS
dotenv.config();

//EXPRESS APP INITIALIZATION
const app = express();

//DEFINING PORT
const PORT = process.env.PORT || 5000;

//HANDLING JSON SENT BY HTTP REQUEST
app.use(express.json());

//USING AUTH ROUTER
app.use(authRouter);

//USE DRILL ROUTER
app.use(drillRouter);

//USE LEADERBOARD ROUTER
app.use(leaderboardRouter);

//ENABLING CORS
app.use(cors());

//DATABASE CONNECTION
connectDb();

//SETTING UP PORTS TO LISTEN
app.listen(PORT, "0.0.0.0", () => {
  console.log(`server is running on ${PORT}`);
});
