import React from 'react'

const Note = () => {
    return (
        <div className='px-20 py-8'>
            <label>
                <span className='font-satoshi font-semibold text-2xl text-grey-700'>Add Item</span>
                <input required
                    className='todo_input'
                />
            </label>
        </div>
    )
}

export default Note