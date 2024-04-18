"use client";

import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import {useState, useEffect} from 'react';
import RaffleViewDetails from './RaffleViewDetails';


const RaffleView = ( ) => {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const raffleId = searchParams.get("id");
  const [submitting, setSubmitting] = useState(false);
  const [raffle, setRaffle] = useState({
    name: "",
    description: "",
    drawDate: "",
    creator: "",
    participants: [],
  });

  const [userId, setUserId] = useState(session?.user?.id);

  useEffect(() => {
    const fetchRaffleDetails = async () => {
      const response = await fetch(`/api/raffle/${raffleId}`);
      const data = await response.json();

      setRaffle({
        name: data.name,
        description: data.description,
        drawDate: data.drawDate ? new Date(data.drawDate).toISOString() : "",
        creator: data.creator,
        participants: data.participants,
      });
    };

    if (raffleId) fetchRaffleDetails();
    console.log(raffle);
  }, [raffleId]);

  const handleUpdateRaffle = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!raffleId) return alert("No raffle id found!");

    let userId = session?.user?.id;

    if(!userId){
      const name = prompt("Please enter your name");
      const phoneNumber = prompt("Please enter your phone number");

             
        const response = await fetch('/api/guestusers/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            { 
              name, 
              phoneNumber })
        });
  
        const data = await response.json();
        userId = data._id;
        setUserId(userId);
    

    }



    try {
      console.log(session?.user.id);
      const response = await fetch(`/api/raffle/${raffleId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
          userId //: session?.user.id,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <RaffleViewDetails
      raffle={raffle}
      userId={userId}
      onEnter={handleUpdateRaffle}
    />
  );
};

export default RaffleView