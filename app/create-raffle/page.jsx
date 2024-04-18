"use client";

import React from 'react';
import { useState } from 'react';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import Form from '@/components/Form';

const CreateRaffle = () => {
  
  const router = useRouter();
  const {data: session} = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [raffle, setRaffle] = useState({
    name: '',
    description: '',
    participants: [],
    drawDate: new Date(),
  });

  const createRaffle = async (e) => {
    e.preventDefault();    
    setSubmitting(true);

    //api call
    try {
        const response = await fetch('/api/raffle/new', {
          method: 'POST',
          body: JSON.stringify({
            userId: session?.user.id,
            name: raffle.name,            
            description: raffle.description,
            drawDate: raffle.drawDate,
          })
        })
  
  
        if(response.ok){
          router.push('/');
        }
  
      } catch (error) {
        console.log(error);
  
      } finally{
        setSubmitting(false);
      }

}

  return (
    <Form
        type="Create"
        raffle={raffle}
        setRaffle={setRaffle}
        submitting={submitting}
        handleSubmit={createRaffle}    
    />
  )

}

export default CreateRaffle