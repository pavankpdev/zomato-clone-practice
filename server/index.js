// importing all the environment variables
require("dotenv").config();

// importing libraries
import express from "express";
require("express-async-errors");
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// Databse connection
import ConnectDB from "./database/connection";

// Configs
import googleAuthConfig from "./configs/google-passport.config";

// importing microservices route
import Restaurant from "./API/restaurants/";
import Auth from "./API/auth";

// Initializing express application
const ZomatoApp = express();

// application middleware
ZomatoApp.use(helmet());
ZomatoApp.use(express.urlencoded({ extended: false }));
ZomatoApp.use(express.json());
ZomatoApp.use(cors());
ZomatoApp.use(passport.initialize());
ZomatoApp.use(passport.session());

// Passport Config
googleAuthConfig(passport);

// Application Route Middleware
ZomatoApp.use("/restaurants", Restaurant);
ZomatoApp.use("/auth", Auth);

// 404 route
ZomatoApp.get("/", (req, res) => {
  res.json({ error: "Invalid Route" });
});

// Specifying the port to run the server
const port = process.env.PORT;
ZomatoApp.listen(port, () =>
  ConnectDB().then(() => console.log(`Listening on port ${port}...`))
);
