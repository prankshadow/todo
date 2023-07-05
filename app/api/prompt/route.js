import { connectToDB } from "@/utils/database";
import Todo from "@/models/todo";

export const GET = async (request) => {
    try {
        await connectToDB();

        const todos = await Todo.find({}).populate('creator');

        return new Response(JSON.stringify(todos), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all todos", {
            status: 500
        })
    }
}