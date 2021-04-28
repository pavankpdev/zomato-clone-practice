import express from "express";

// Database Modals
import { MenuModal } from "../../database/AllModals";

const Router = express.Router();

// @Route   GET /menu/:menuID
// @des     get all menus associated with a restaurant
// @access  PUBLIC
Router.get("/:menuID", async (req, res) => {
  try {
    const { menuID } = req.params;
    const getMenus = await MenuModal.findById(menuID);
    if (!getMenus) return res.status(404).json({ menu: [] });
    return res.json({ menu: getMenus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   POST /menu/new
// @des     add new menu
// @access  PUBLIC
Router.post("/new", async (req, res) => {
  try {
    const { menuData } = req.body;

    if (menuData._id) {
      const updateMenu = await MenuModal.findByIdAndUpdate(
        menuData._id,
        {
          $push: {
            menus: { $each: menuData.menus },
          },
        },
        { new: true }
      );

      return res.json({ menu: updateMenu });
    }

    const createNewMenu = await MenuModal.create(menuData);

    return res.json({ menu: createNewMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   POST menu/recommendation/new
// @des     add new recommendation
// @access  PUBLIC
Router.post("/recommendation/new", async (req, res) => {
  try {
    const { menuData } = req.body;

    const updateMenu = await MenuModal.findByIdAndUpdate(
      menuData._id,
      {
        $push: {
          recommended: { $each: menuData.recommended },
        },
      },
      { new: true }
    );

    return res.json({ menu: updateMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   PATCH /menu/update
// @des     update new menu
// @access  PUBLIC
Router.patch("/update", async (req, res) => {
  try {
    const { menuData } = req.body;
    const updateMenu = await MenuModal.findOneAndUpdate(
      { _id: menuData._id, "menus._id": menuData.menu_id },
      {
        $set: {
          "menus.$.name": menuData.name,
        },
        $push: { "menus.$.items": { $each: menuData.items } },
      },
      { new: true }
    );

    return res.json({ menu: updateMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   DELETE /menu/delete/single
// @des     deletes a single menu
// @access  PUBLIC
Router.delete("/delete/single", async (req, res) => {
  try {
    const { menuData } = req.body;

    const updateMenu = await MenuModal.findByIdAndUpdate(
      menuData._id,
      {
        $pull: { menus: { _id: menuData.menu_id } },
      },
      { new: true }
    );

    return res.json({ menu: updateMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   DELETE /menu/item/delete/single
// @des     deletes a single menu
// @access  PUBLIC
Router.delete("/item/delete/single", async (req, res) => {
  try {
    const { menuData } = req.body;

    const updateMenu = await MenuModal.findOneAndUpdate(
      { _id: menuData._id, "menus._id": menuData.menuId },
      {
        $pull: { "menus.$.items": menuData.deleteItem },
      },
      { new: true }
    );

    return res.json({ menu: updateMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   DELETE menu/recommendation/delete/single
// @des     deletes a single menu
// @access  PUBLIC
Router.delete("/recommendation/delete/single", async (req, res) => {
  try {
    const { menuData } = req.body;

    const updateMenu = await MenuModal.findByIdAndUpdate(
      menuData._id,
      {
        $pull: { recommended: menuData.recommended_id },
      },
      { new: true }
    );

    return res.json({ menu: updateMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
