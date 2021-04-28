// Libraries
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  address: [{ type: String }],
  phoneNumbers: [{ type: Number }],
});

UserSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      user: this._id.toString(),
    },
    process.env.JWT_PRIVATE_KEY
  );
};

UserSchema.statics.findByEmail = async (email) => {
  const user = await UserModal.findOne({ email });
  if (!user) throw new Error("Email doesn't exist.");
  return user;
};

UserSchema.statics.userShouldNotExist = async (email) => {
  const user = await UserModal.findOne({ email });
  if (user) throw new Error("User Already exist.");
  return false;
};

UserSchema.statics.findByEmailAndPassword = async (email, password) => {
  const user = await UserModal.findOne({ email });
  if (!user) throw new Error("Email doesn't exist.");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password.");
  return user;
};

UserSchema.pre("save", function (next) {
  const user = this;
  const SALT_FACTOR = 8;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err);
    // hashing password
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      return next();
    });
  });
});

export const UserModal = mongoose.model("Users", UserSchema);
