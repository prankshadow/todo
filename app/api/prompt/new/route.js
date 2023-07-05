import { connectToDB } from "@/utils/database";
import Todo from "@/models/todo";

export const POST = async (req) => {
    const { userId, todoitem } = await req.json();

    try {

        await connectToDB();
        const newTodo = new Todo({
            creator: userId, todoitem
        })

        await newTodo.save();
        return new Response(JSON.stringify(newTodo), {
            status: 201
        })

    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 })
    }
}