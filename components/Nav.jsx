"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect} from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
  // const [toggleDropdownm, setToggleDropdown] = useState(false);

  const {data: session} = useSession();

    useEffect( () => {

        const setUpProviders = async () => {
            const response = await getProviders(); 
            setProviders(response);

        }

        setUpProviders();

    }, [])




  return (
    <nav className="flex justify-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/icons/shiba.png"
          alt="wheel ruffle logo"
          width="50"
          height="50"
          className="object-contain"
        />
      </Link>

      {/*desktop nav*/}

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-raffle" className="pink_btn w-btn-primary">Create raffle</Link>
            <button type="button" onClick={signOut} className="transp_btn ">
              Sign out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={50}
                height={50}
                alt="profile"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="transp_btn w-btn-primary "
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav