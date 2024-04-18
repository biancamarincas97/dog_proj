"use client";

import React from 'react';
import { useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@/components/Profile';

const ProfileView = () => {

    const {data: session} = useSession();
    const [raffles, setRaffles] = useState([]);

    useEffect(() => {
        const fetchRaffles = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/raffles`);
            const data = await response.json();
    
            setRaffles(data);
    
            
        }

        // console.log(data);
    
        if(session?.user.id) fetchRaffles();
    
    
    }, []);


  return (
    <Profile
    name="My"
    desc="Save your raffles"
    data={raffles}/>
    
  )
}

export default ProfileView