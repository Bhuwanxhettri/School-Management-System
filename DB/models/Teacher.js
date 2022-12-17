const mongoose = require("mongoose");
const validator = require("validator");
const uniqueValidator = require("mongoose-unique-validator");

const teacherSchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, "Please Enter Your Name"],
      maxLength: [30, "Name cannot exceed more than 30 character"],
      minLength: [4, "Name must be more than 4 character"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Name"],
      uinque: true,
      validate: [validator.isEmail, "Please Enter a Valid Email"],
    },
    user_name: {
      type: String,
      required: true,
      unique: [true,"User Name is All ready used"]
    },
    gender:{
        type:String,
        // required:true,
        enum: ["Male", "Female", "Others"], 
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Password must be 8 character"],
      select: false,
    },
    phone_number: {
      type: Number,
    },
    address: {
      type: String,
    },
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    qualification:[String],
    faculty:[String],
    role: {
      type: String,
      default: "teacher",
    },
    token:{
      type:String,
      unique: [true,"Token must be unique"]
    },
    active: {
      type: Number,
      default: 1,
      enum: [0, 1],
    },
    student:[{type:mongoose.Types.ObjectId,ref:"Student"}]
  },
  { timestamps: true }
);

teacherSchema.plugin(uniqueValidator);
const teacherModel = mongoose.model("Teacher",teacherSchema);
module.exports = teacherModel;
