// importing all the environment variables
require("dotenv").config();

// importing libraries
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// Initializing express application
const ZomatoApp = express();

// application middleware
ZomatoApp.use(helmet());
ZomatoApp.use(express.urlencoded({ extended: false }));
ZomatoApp.use(express.json());
ZomatoApp.use(cors());

// 404 route
ZomatoApp.get("/", (req, res) => {
  res.json({ error: "Invalid Route" });
});

// Specifying the port to run the server
const port = process.env.PORT;
ZomatoApp.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
