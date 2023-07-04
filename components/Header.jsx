import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='pt-8 w-full'>
      <h1 className='text-center font-fasthand text-6xl orange_gradient'>To-Do List</h1>

      <div className='absolute md:right-10 top-10 right-3 lg:block md:block hidden'>
        <button>

          <Image src='/logo.svg'
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
          />
        </button>
      </div>

      {/* Mobile navigation */}

      <div className='absolute md:right-10 top-10 right-3 lg:hidden md:hidden block'>
        <button>

          <Image src='/logo2.svg'
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
          />
        </button>
      </div>

    </div>
  )
}

export default Header

