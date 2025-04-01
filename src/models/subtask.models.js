import mongoose, { Schema } from "mongoose";

const subTaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  task: {
    type: Schema.Types.ObjectId,
    ref: "Task",
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

export const Subtask = mongoose.model("Subtask", subTaskSchema);
