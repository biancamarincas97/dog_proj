import React from 'react';
import Image from 'next/image';

const RaffleViewDetails = ({raffle, userId, onEnter}) => {
  if (!raffle || !raffle.creator || !raffle.participants) {
    return <div>Loading...</div>;  
  }

  const handlePickWinner = () => {
    if (raffle.participants.length === 0) {
      alert("No participants yet!");
      return;
    }

    const winnerIndex = Math.floor(Math.random() * raffle.participants.length);
    const winnerId = raffle.participants[winnerIndex];

    alert(`The winner is: ${winnerId}`);
  };
    



  const isParticipant = raffle.participants.includes(userId);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-[600px] min-h-[700px] space-y-8 p-10 raffle_card rounded-xl shadow-md overflow-auto">
        <div>
          <h1 className="mt-6 mb-6 text-center text-6xl font-extrabold text-gray-900">
            {raffle.name}
          </h1>
          <img
            className="mx-auto h-[300px] w-[400px]"
            src="/assets/images/feedcarddog.jpg"
            alt="silly goofy dog"
          />
          <p className="mt-6 text-center text-lg text-gray-600">
            {raffle.description}
          </p>
          <p className="mt-6 text-center text-sm font-semibold text-gray-600">
            {new Date(raffle.drawDate).toLocaleString()}
          </p>
          <div className="mt-6 ml-4 text-center text-sm text-gray-600 flex items-center justify-center">
            Created by{" "}
            <span className="text-blue-700 font-bold italic ml-2">
              {raffle.creator.username}
            </span>
            <div className="rounded-full object-contain ml-2">
              <Image
                className="rounded-xl"
                src={raffle.creator.image}
                alt="user_image"
                width={20}
                height={20}
              />
            </div>
          </div>
          <button
            onClick={onEnter}
            disabled={isParticipant}
            className={`pink_btn mt-6 px-4 mx-auto block ${
              isParticipant ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Enter
          </button>
          <div>
            {raffle.creator._id === userId && (
              <button
                onClick={handlePickWinner}
                className="secondary_btn mt-6 px-4 mx-auto block"
              >
                Pick winner
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaffleViewDetails