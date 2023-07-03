"use client"
import React, { useEffect, useState } from 'react';
import Note from '@/components/Note'
import ToDoItem from '@/components/ToDoItem'
import { useRouter } from 'next/navigation';


const ToDoItemList = ({data}) => {
    return(
        <div className='grid grid-cols-4 gap-4 text-center'>
            {data.map((post) => (
                <ToDoItem 
                    key={post._id}
                    post={post}
                />
            ))}
        </div>
    )
}

const ToDoArea = () => {

    const router = useRouter();

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        todoitem: "",
    });

    const [posts, setPosts] = useState([]);

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

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch('/api/prompt');
          const data = await response.json();
    
          setPosts(data);
        }

        fetchPosts();
      }, [])

    return (
        <>
            <Note
                type="Add"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPrompt}
            />
            <ToDoItemList 
                data={posts}
            />
        </>
    )
}

export default ToDoArea