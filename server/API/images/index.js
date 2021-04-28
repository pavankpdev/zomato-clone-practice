// Libraries
import express from "express";
import passport from "passport";

// Database Modals
import { ImageModal } from "../../database/AllModals";

const Router = express.Router();

// @Route   GET /images/:imageID
// @des     get all images associated with the given ID
// @access  PUBLIC
Router.get("/:imageID", async (req, res) => {
  try {
    const { imageID } = req.params;
    const getImages = await ImageModal.findById(imageID);
    if (!getImages)
      return res.status(404).json({ foods: "Images Not Found!!!" });

    return res.json({ images: getImages });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   POST /images/new
// @des     add new images
// @access  PRIVATE
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
  try {
    const newImages = await ImageModal.create(req.body.imageData);
    return res.json({ images: newImages });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   DELETE /images/delete/single
// @des     delete one image
// @access  PRIVATE
Router.delete(
  "/delete/single",
  passport.authenticate("jwt"),
  async (req, res) => {
    try {
      const deleteOneImage = await ImageModal.findByIdAndUpdate(
        req.body.imageData.parentID,
        {
          $pull: { images: { _id: req.body.imageData.imageID } },
        },
        { new: true }
      );
      console.log(deleteOneImage);
      return res.json({ images: Boolean(deleteOneImage) });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

// @Route   DELETE /images/delete
// @des     delete all image
// @access  PRIVATE
Router.delete("/delete/", passport.authenticate("jwt"), async (req, res) => {
  try {
    const deleteImage = await ImageModal.findByIdAndDelete(
      req.body.imageData.parentID
    );
    return res.json({ images: Boolean(deleteImage) });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
