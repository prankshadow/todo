import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    todoitem: {
        type: String,
        required: [true, 'Item required']
    },
})

const Todo = models.Todo || model('Todo', TodoSchema)

export default Todo;