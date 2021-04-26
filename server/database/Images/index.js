// Libraries
const mongoose = require("mongoose");

const ImageSchema = new mongoose({
  location: {
    type: String,
    required: true,
  },
});
