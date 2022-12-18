const mongoose = require("mongoose");
const validator = require("validator");

const groupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, "Please Enter Your Name"],
      maxLength: [30, "Name cannot exceed more than 30 character"],
      minLength: [4, "Name must be more than 4 character"],
    },
    admin:{
        type:mongoose.Types.ObjectId, ref:"Teacher"
    },
    content: [{ type: String }],
    teacher: [{ type: mongoose.Types.ObjectId, ref: "Teacher" }],
    student: [{ type: mongoose.Types.ObjectId, ref: "Student" }],
  },
  { timestamps: true }
);

// groupSchema.plugin(uniqueValidator);
const groupModel = mongoose.model("Group", groupSchema);
module.exports = groupModel;
