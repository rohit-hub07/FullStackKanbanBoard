import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
  avatar: {
    type: {
      url: String,
      localpath: String,
    },
    default: {
      url: `https://placehold.co/600x400`,
      localpath: "",
    },
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isEmailVerifed: {
    type: Boolean,
    default: false,
  },
  refreshToken: {
    type: String,
  },
  forgotPasswordToken: {
    type: String,
  },
  forgotPasswordExpiry: {
    type: String,
  },
  emailVerifiedToken: {
    type: String,
  },
  emailVerifiedExpiry: {
    type: String,
  },
}, { timestamps: true})

export const User = mongoose.model("User", userSchema);