import React from 'react'

const Note = () => {
    return (
        <form className='px-20 py-8 flex justify-items-end'>
            <label className='w-full'>
                <span className='font-satoshi font-semibold text-4xl text-grey-700 font-alegreyaSansSC'>Add Item</span>
                <input required
                    className='todo_input'
                />
            </label>

            <div className='flex items-center'>
                <button className='border-2 border-solid border-black rounded-md font-alegreyaSansSC font-bold text-2xl px-6 py-2'>
                    Add
                </button>
            </div>

        </form>
    )
}

export default Note