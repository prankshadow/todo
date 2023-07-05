"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Header = () => {

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setUpProviders();
  }, []); 

  return (
    <div className='pt-8 w-full'>
      <h1 className='text-center font-fasthand text-6xl orange_gradient'>To-Do List</h1>

      <div className='absolute md:right-10 top-10 right-3 lg:block md:block hidden'>

        {/* {alert(session?.user)} */}
        {/* {alert(providers)} */}

        {session?.user ? (
          <div>
            <button>
              <Image src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={() => setToggleDropdown((prev) => !prev)}
              />
            </button>

            {toggleDropdown && (
              <div className='dropdown'>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <Image
                  src='/google.svg'
                  onClick={() => signIn(provider.id)}
                  width={37}
                  height={37}
                  alt='google button'
                  className='cursor-pointer'
                />
              </div>
            ))}
          </>
        )}

      </div>

      {/* Mobile navigation */}

      <div className='absolute md:right-10 top-10 right-3 lg:hidden md:hidden block'>

        {session?.user ? (
          <div>
            <button>
              <Image src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={() => setToggleDropdown((prev) => !prev)}
              />
            </button>

            {toggleDropdown && (
              <div className='dropdown'>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <Image
                  src='/google.svg'
                  onClick={() => signIn(provider.id)}
                  width={37}
                  height={37}
                  alt='google button'
                  className='cursor-pointer'
                />
              </div>
            ))}
          </>
        )}

      </div>

    </div>
  )
}

export default Header
