// importing all the environment variables
require("dotenv").config();

// importing libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Databse connection
import ConnectDB from "./database/connection";

// importing microservices route
import Restaurant from "./API/restaurants/";

// Initializing express application
const ZomatoApp = express();

// application middleware
ZomatoApp.use(helmet());
ZomatoApp.use(express.urlencoded({ extended: false }));
ZomatoApp.use(express.json());
ZomatoApp.use(cors());

// Application Route Middleware
ZomatoApp.use("/restaurants", Restaurant);

// 404 route
ZomatoApp.get("/", (req, res) => {
  res.json({ error: "Invalid Route" });
});

// Specifying the port to run the server
const port = process.env.PORT;
ZomatoApp.listen(port, () =>
  ConnectDB().then(() => console.log(`Listening on port ${port}...`))
);
