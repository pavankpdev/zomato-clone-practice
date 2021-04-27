// Libraries
import mongoose, { mongo } from "mongoose";

const MenuSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: "Restaurant",
  },
  menus: [
    {
      name: { type: String, required: true },
      items: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Foods",
        },
      ],
    },
  ],
  recommended: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Foods",
    },
  ],
});

export const MenuModal = mongoose.model("Menu", MenuSchema);
