import JwtPassport from "passport-jwt";
import { UserModal } from "../database/AllModals";
import dotenv from "dotenv";
dotenv.config({
  path: require("path").resolve(__dirname, "../.env"),
});

const JWTStratergy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_PRIVATE_KEY;

export default (passport) => {
  passport.use(
    new JWTStratergy(opts, async (jwt_payload, done) => {
      try {
        const user = await UserModal.findById(jwt_payload.user);
        if (!user) return done(null, false);
        return done(null, user);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
};
