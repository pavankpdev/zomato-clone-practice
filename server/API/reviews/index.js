import express from "express";

// Database Modals
import { ReviewModal } from "../../database/AllModals";

const Router = express.Router();

Router.get("/:type/:reviewID", async (req, res) => {
  try {
    const { type, reviewID } = req.params;
    const getReviews = await ReviewModal.find({ [type]: reviewID });
    if (!getReviews) return res.json({ review: [] });

    return res.json({ review: getReviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/:type/:reviewID/:userID", async (req, res) => {
  try {
    const { type, reviewID, userID } = req.params;
    const getReviews = await ReviewModal.find({
      [type]: reviewID,
      user: userID,
    });
    if (!getReviews) return res.json({ review: [] });

    return res.json({ review: getReviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/new", async (req, res) => {
  try {
    const { reviewData } = req.body;
    const newReview = await ReviewModal.create(reviewData);
    return res.json({ review: newReview });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.delete("/delete", async (req, res) => {
  try {
    const { reviewData } = req.body;
    const deleteReview = await ReviewModal.findByIdAndDelete(reviewData._id);
    return res.json({ review: Boolean(deleteReview) });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
