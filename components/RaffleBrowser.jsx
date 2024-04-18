"use client";

import React from 'react';
import RaffleCard from './RaffleCard';
import {useState, useEffect} from 'react';


const RaffleBrowserCardList = ({data}) => {

    return (
      <div className="mt-12 raffle_layout">
        {data.map((raffle) => (
          <RaffleCard
          key={raffle._id}
          raffle={raffle}
          />
        ))}
      </div>
    )
  
  }
  

const RaffleBrowser = () => {

    const [raffles, setRaffles] = useState([]);

    useEffect(() => {

        const fetchRaffles = async () => {
            const response = await fetch('/api/raffle');
            const data = await response.json();
      
            setRaffles(data);
          }
      
         
          fetchRaffles();

    }, []) 

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="text_gradient">Browse a raffle..</span>
      </h1>
      <p className="desc text-start">
       Select your favourite raffles and increase your chances of winning!  
      </p>
      <div>
        <RaffleBrowserCardList
        data = {raffles}
        />
      </div>
    </section>
  );
}

export default RaffleBrowser