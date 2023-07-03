"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ToDoItem = ({ post }) => {


    const [isCompleted, setIsCompleted] = useState(false);
    const [posts, setPosts] = useState([]);

    const handleCheck = () => {
        setIsCompleted((prev) => !prev);
    };

    const handleDelete = async () => {
        const hasConfirmed = confirm("Are you sure want to delete this todo item?")

        if (hasConfirmed) {
            try {

                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: 'DELETE'
                });

                const filteredTodo = posts.filter((p) => p._id !== post._id)
                setPosts(filteredTodo)

            } catch (error) {
                console.log(error);
            }
        }
    }



    return (
        <div className='text-4xl font-alegreyaSansSC font-semibold'>
            <div className='flex items-center'>
                <h1 className={`heading_property px-8 grow-0 text-ellipsis overflow-hidden w-[80%] hover:break-all ${isCompleted ? 'line-through decoration-4' : ''}`}>{post.todoitem}</h1>
                <div className='grid grid-cols-2 gap-3'>
                    <button>
                        {isCompleted ? <Image
                            src='/cross.svg'
                            width={18}
                            height={18}
                            alt='cross button'
                            onClick={handleCheck}
                        /> :
                            <Image
                                src='/check.svg'
                                width={18}
                                height={18}
                                alt='check button'
                                onClick={handleCheck}
                            />}
                    </button>
                    <button>
                        <Image
                            src='/delete.svg'
                            width={15}
                            height={15}
                            alt='delete button'
                            onClick={handleDelete}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ToDoItem