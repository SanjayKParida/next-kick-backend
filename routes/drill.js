import express from "express";
import {
  getDrills,
  getSingleDrill,
  getUserDrills,
  postUserDrill,
} from "../controllers/drillController.js";

export const drillRouter = express.Router();

//ROUTE TO GET DRILLS
drillRouter.get("/api/drills", getDrills);

//ROUTE TO GET SINGLE DRILL
drillRouter.get("/api/drills/:id", getSingleDrill);

//ROUTE TO SAVE USER COMPLETED DRILL
drillRouter.post("/api/user-drills", postUserDrill);

//ROUTE TO GET USER COMPLETED DRILLS
drillRouter.get("/api/user-drills/:userId", getUserDrills);
