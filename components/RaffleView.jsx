"use client";

import { Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/router';
import React from 'react';
import {useState, useEffect} from 'react';
import RaffleViewDetails from './RaffleViewDetails';


const RaffleView = ( ) => {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  // const { id: raffleId } = router.query;
  const raffleId = searchParams.get("id");
  
  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [raffle, setRaffle] = useState({
    name: "",
    description: "",
    drawDate: "",
    creator: "",
    participants: [],
  });

  const [userId, setUserId] = useState(null);



  useEffect(() => {
    console.log('raffleId SHOWS UP OR NOT?:', raffleId);
    console.log('useEffect triggered');

    const fetchRaffleDetails = async () => {
      if (!raffleId) return;

      console.log('Making fetch request');
      setIsLoading(true);
      const response = await fetch(`/api/raffle/${raffleId}`);
      


      if(!response.ok){
        console.log("Error fetching requessssssssss: ", response)
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      console.log("API DATA: ", data)

      setRaffle({
        name: data.name,
        description: data.description,
        drawDate: data.drawDate ? new Date(data.drawDate).toISOString() : "",
        creator: data.creator,
        participants: data.participants,
      });


      setIsLoading(false);
    };

    fetchRaffleDetails().catch(error => console.log("ERORR FETCHING DETS: ", error));
   
  }, [raffleId]);


  useEffect(() => {
    setUserId(session?.user?.id);
  }, [session]);


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
          userId   
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
    <Suspense fallback = {<div>Loading...</div>}>
    <RaffleViewDetails
      raffle={raffle}
      userId={userId}
      onEnter={handleUpdateRaffle}
    />
     </Suspense>
  );
};

export default RaffleView