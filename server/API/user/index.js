import express from "express";
import bcrypt from "bcryptjs";

// Database Modals
import { UserModal } from "../../database/AllModals";

const Router = express.Router();

Router.get("/:userID", async (req, res) => {
  try {
    const { userID } = req.params;
    const getUser = await UserModal.findById(userID);
    if (!getUser) return res.json({ user: [] });

    return res.json({ user: getUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.patch("/update", async (req, res) => {
  try {
    const { userData } = req.body;
    if (userData.password) {
      const salt = await bcrypt.genSalt(8);
      const hashPassword = await bcrypt.hash(userData.password, salt);
      userData.password = hashPassword;
    }

    const updateUserProfile = await UserModal.findByIdAndUpdate(
      userData._id,
      {
        $set: userData,
      },
      { new: true }
    );
    return res.json({ user: updateUserProfile });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
