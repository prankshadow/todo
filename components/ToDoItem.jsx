import Image from 'next/image'
import React from 'react'

const ToDoItem = ({ post }) => {
    return (
        <div className='text-4xl font-alegreyaSansSC font-semibold'>
            <div className='flex items-center'>
                <h1 className='px-8 grow-0 truncate w-[80%]'>{post.todoitem}</h1>
                <div className='grid grid-cols-2 gap-3'>
                    <button>
                        <Image
                            src='/check.svg'
                            width={18}
                            height={18}
                            alt='check button'
                        />
                    </button>
                    <button>
                        <Image
                            src='/delete.svg'
                            width={15}
                            height={15}
                            alt='delete button'
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ToDoItem