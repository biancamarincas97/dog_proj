"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect} from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Feed = () => {
  const isUserLoggedIn = true;

  return (
    
    <div className="sm:flex hidden">
        {isUserLoggedIn ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/browse-raffles" className="purple_btn w-btn-primary h-16">
            Enter a raffle
          </Link>

        </div>) : (<></>)}


      </div>

      


  )
}

export default Feed