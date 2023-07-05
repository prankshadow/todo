import React from 'react'
import { useSession } from 'next-auth/react';

const Note = ({
    post, setPost, submitting, handleSubmit, type,
}) => {

    const { data: session } = useSession();

    return (
        <form className='px-20 py-8 flex justify-items-end' onSubmit={handleSubmit}>
            <label className='w-full'>
                <span className='font-satoshi font-semibold text-4xl text-grey-700 font-alegreyaSansSC'>Add Item</span>
                <input required
                    className='todo_input'
                    value={post.todoitem}
                    onChange={(e) => setPost({ ...post, todoitem: e.target.value })}
                    disabled={!session}
                    placeholder={session ? '' : 'PLEASE SIGN IN WITH GOOGLE'}
                />
            </label>

            <div className='flex items-center'>
                <button type='submit' className='border-2 border-solid border-black rounded-md font-alegreyaSansSC font-bold text-2xl px-6 py-2'
                    disabled={!session || submitting}
                >
                    {submitting ? `${type}...` : type}
                </button>
            </div>

        </form>
    )
}

export default Note