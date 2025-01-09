import { UserDrill } from "../models/userDrill.js";
import { User } from "../models/user.js";

// Get leaderboard data
export const getLeaderboard = async (req, res) => {
  try {
    // Get all users
    const users = await User.find({}, "fullName");

    // Get all user drills
    const leaderboardData = [];

    // Calculate total points for each user
    for (const user of users) {
      const userDrills = await UserDrill.find({ userId: user._id });

      // Calculate total count for this user
      const totalCount = userDrills.reduce(
        (sum, drill) => sum + drill.completedCount,
        0
      );

      leaderboardData.push({
        userId: user._id,
        fullName: user.fullName,
        totalCount: totalCount,
        drillsCompleted: userDrills.length,
      });
    }

    // Sort by total count in descending order
    leaderboardData.sort((a, b) => b.totalCount - a.totalCount);

    // Add ranks
    const rankedLeaderboard = leaderboardData.map((entry, index) => ({
      ...entry,
      rank: index + 1,
    }));

    res.status(200).json(rankedLeaderboard);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get user's ranking
export const getUserRank = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Get user's drills
    const userDrills = await UserDrill.find({ userId });

    // Calculate user's total count
    const userTotalCount = userDrills.reduce(
      (sum, drill) => sum + drill.completedCount,
      0
    );

    // Get all users' drill counts for ranking
    const users = await User.find();
    const allUserCounts = [];

    for (const user of users) {
      const drills = await UserDrill.find({ userId: user._id });
      const totalCount = drills.reduce(
        (sum, drill) => sum + drill.completedCount,
        0
      );
      allUserCounts.push({ userId: user._id, totalCount });
    }

    // Sort in descending order
    allUserCounts.sort((a, b) => b.totalCount - a.totalCount);

    // Find user's rank
    const rank =
      allUserCounts.findIndex((user) => user.userId.toString() === userId) + 1;

    res.status(200).json({
      rank,
      totalCount: userTotalCount,
      drillsCompleted: userDrills.length,
    });
  } catch (error) {
    console.error("Error fetching user rank:", error);
    res.status(500).json({ message: error.message });
  }
};
