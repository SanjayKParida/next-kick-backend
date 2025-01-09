import { Drill } from "../models/drill.js";
import { UserDrill } from "../models/userDrill.js";

//DRILL GET ENDPOINT
export const getDrills = async (req, res) => {
  try {
    const drills = await Drill.find();
    res.status(200).json(drills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET SINGLE DRILL
export const getSingleDrill = async (req, res) => {
  try {
    const drills = await Drill.findById(req.params.id);
    if (drills) {
      res.status(200).json(drills);
    } else {
      res.staus(404).json({ message: "Drills not found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//POST USER DRILL
export const postUserDrill = async (req, res) => {
  const { userId, drillId, completedCount } = req.body;
  try {
    // Find the drill to verify total count
    const drill = Drill.findById();
    if (!drill) {
      res.status(404).json({ message: "Drill not found!" });
    }
    //Verify completedCount doesn't exceed totalCount
    if (completedCount > drill.totalCount) {
      return res.status(400).json({
        message: "Completed count cannot exceed total count",
      });
    }
    //Create a new instance of userDrill
    const userDrill = new UserDrill({
      userId,
      drillId,
      completedCount,
    });
    //Save userdrill to database
    const savedUserDrill = userDrill.save();

    //Send the response back
    res.status(201).json(savedUserDrill);
  } catch (error) {
    //Catch the error
    res.status(500).json({ message: error.message });
  }
};

//GET USER'S COMPLETED DRILLS
export const getUserDrills = async (req, res) => {
  try {
    console.log("Fetching drills for userId:", req.params.userId); // Debug log

    const userDrills = await UserDrill.find({
      userId: req.params.userId,
    }).populate("drillId");

    console.log("Found userDrills:", userDrills); // Debug log

    res.status(200).json(userDrills);
  } catch (error) {
    console.error("Error in getUserDrills:", error); // Added error logging
    res.status(500).json({ message: error.message });
  }
};
