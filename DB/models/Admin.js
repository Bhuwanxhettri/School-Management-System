const mongoose = require("mongoose");
const validator = require("validator");
const uniqueValidator = require("mongoose-unique-validator");

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: [30, "Name cannot exceed more than 30 character"],
      minLength: [4, "Name must be more than 4 character"],
    },
    email: {
      type: String,
      uinque: true,
      validate: [validator.isEmail, "Please Enter a Valid Email"],
    },
    user_name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Password must be 8 character"],
      select: false,
    },
    phone_number: {
      type: String,
    },
    address: {
      type: String,
    },
    department:{
      type: String,
      enum: ["BAA", "BCA","BIM","CSIT"],
    },
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    role: {
      type: String,
      enum: ["superadmin", "hod"],
      default: "hod",
    },
    active: {
      type: Number,
      default: 1,
      enum: [0, 1],
    }
  },
  { timestamps: true }
);

adminSchema.plugin(uniqueValidator);
const adminModel = mongoose.model("Admin", adminSchema);
module.exports = adminModel;
