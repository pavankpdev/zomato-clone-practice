import googleOAuth20 from "passport-google-oauth20";

// Database model
import { UserModal } from "../database/AllModals";

const GoogleStratergy = googleOAuth20.Strategy;

export default (passport) => {
  passport.use(
    new GoogleStratergy(
      {
        clientID: process.env.OAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET,
        callbackURL: `http://localhost:4000/auth/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          fullname: profile.displayName,
          email: profile.emails[0].value,
          profilePic: profile.photos[0].value,
        };
        try {
          const user = await UserModal.findOne({
            email: newUser.email,
          });

          if (user) {
            done(null, user);
          } else {
            const createUser = await UserModal.create(newUser);
            done(null, createUser);
          }
        } catch (error) {
          done(error, null);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, { user });
  });

  passport.deserializeUser((id, done) => {
    done(null, id);
  });
};
