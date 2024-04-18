import React from 'react';
import RaffleCard from './RaffleCard';

const Profile = ({name, desc, data}) => {
  return (
    
    <section className="w-full">
      <h1 className="head_text tex-left">
        <span className="text_gradient">{name} profile</span>
      </h1>
      <p className="desc text-left">
        {desc}
      </p>

      <div className="mt-10 raffle_layout">
        {data.map((raffle) => (
          <RaffleCard
            key={raffle._id}
            raffle={raffle} />
        ))}
      </div>


    </section>


  )
}

export default Profile