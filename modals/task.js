const mongoose = require("mongoose");
const schema = mongoose.Schema;

const taskSchema = new schema({
  name: {
    type: String,
    required: [true, "Must provide a name."],
    trim: true,
    maxlength: [20, "Name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
