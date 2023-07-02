import React from 'react'

const ToDoItem = () => {
    return (
        <main className='note'>
            <label>
                <span className='font-satoshi font-semibold text-base text-grey-700'>Tag{` `}<span className='font-normal'>(#product, #webdevelopment, #idea)</span></span>
            </label>
            <button>Add</button>
        </main>
    )
}

export default ToDoItem