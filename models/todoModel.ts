import { Schema, model, models } from "mongoose"

const todoSchema = new Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
)

const Todo = models.Todo || model("Todo", todoSchema)

export default Todo
