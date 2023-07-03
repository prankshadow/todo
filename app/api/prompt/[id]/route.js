const { connectToDB } = require("@/utils/database")
import Todo from "@/models/todo";

export const DELETE = async (request, { params }) => {
    try {

        await connectToDB();

        await Todo.findByIdAndDelete(params.id);

        return new Response("Prompt deleted successfully", { status: 200 })

    } catch (error) {
        return new Response("Failed to delete todo item", { status: 500 })
    }
}