import express from "express";
import passport from "passport";

// Database Modals
import { UserModal } from "../../database/AllModals";

const Router = express.Router();

Router.post("/signin", async (req, res, next) => {
  try {
    const { email, password } = req.body.credentials;
    const user = await UserModal.findByEmailAndPassword(email, password);
    const token = user.generateAuthToken();
    return res.json({
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/signup", async (req, res, next) => {
  try {
    const { email, password, fullname } = req.body.credentials;
    await UserModal.userShouldNotExist(email);
    const user = await UserModal.create({ email, password, fullname });
    const token = user.generateAuthToken();
    return res.json({
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

Router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  function (req, res) {
    console.log(req.session);
    // Successful authentication, redirect home.
    res.json({ token: req.session.passport.user.token });
  }
);

export default Router;
