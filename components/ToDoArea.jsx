"use client"
import React, { useState } from 'react';
import Note from '@/components/Note'
import ToDoItem from '@/components/ToDoItem'
import { useRouter } from 'next/navigation';


const ToDoArea = () => {

    const router = useRouter();

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        todoitem: "",
    });

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/prompt/new',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        todoitem: post.todoitem,
                    })
                })

            if (response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <>
            <Note
                type="Add"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPrompt}
            />
            <ToDoItem />
        </>
    )
}

export default ToDoArea