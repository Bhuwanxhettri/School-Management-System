const mongoose = require("mongoose");
const validator = require("validator");
const uniqueValidator = require("mongoose-unique-validator");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
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
        required:true,
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
    token:{
      type:String,
    },
    qualification:[String],
    faculty:{
        type:String
    },
    role: {
        type: String,
        default: "teacher",
      },
    active: {
      type: Number,
      default: 1,
      enum: [0, 1],
    },
    teacher:[{type:mongoose.Types.ObjectId,ref:"Teacher"}]
  },
  { timestamps: true }
);

studentSchema.plugin(uniqueValidator);
const studentModel = mongoose.model("Student",studentSchema);
module.exports = studentModel;
