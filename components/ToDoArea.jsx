"use client"
import React, { useEffect, useState } from 'react';
import Note from '@/components/Note'
import ToDoItem from '@/components/ToDoItem'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';


const ToDoItemList = ({ data, handleDelete }) => {
    return (
        <div className='md:grid grid-cols-4 gap-4 text-center flex flex-col'>
            {data.map((post) => (
                <ToDoItem
                    key={post._id}
                    post={post}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

const ToDoArea = () => {

    const router = useRouter();
    const { data: session } = useSession();

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
                        userId: session?.user.id,
                        todoitem: post.todoitem,
                    })
                })

            if (response.ok) {
                router.push('/')
            }
            const addedItem = await response.json();
            setPosts((prevData) => [...prevData, addedItem]);
            setPost({ todoitem: "", });
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    const handleDelete = async (postId) => {
        const hasConfirmed = window.confirm("Are you sure want to delete this todo item?");
      
        if (hasConfirmed) {
          try {
            await fetch(`/api/prompt/${postId}`, {
              method: 'DELETE'
            });
            const updatedPosts = posts.filter(post => post._id !== postId);
            setPosts(updatedPosts);
          } catch (error) {
            console.log(error);
          }
        }
      };

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();

            setPosts(data);
        }
        if (session?.user.id) fetchPosts();
    }, [session?.user.id])

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
                handleDelete={handleDelete}
            />
        </>
    )
}

export default ToDoArea