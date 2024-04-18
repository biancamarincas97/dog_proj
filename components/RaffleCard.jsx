"use client";

import moment from "moment";
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const RaffleCard = ({ raffle  }) => {
  return (
    <div className="max-w-sm mx-auto raffle_card shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-8 py-8">
        <div className="mt-4 sm:mt-0 text-center sm:text-center space-y-4">
          <p className="text-xl font-medium leading-tight overflow-ellipsis overflow-hidden">
            {raffle.name}
          </p>
          <img
            className="block mx-auto sm:mx-0 sm:flex-shrink-0 w-full object-cover"
            src="/assets/images/feedcarddog.jpg"
            alt="silly pug raffle"
          />
          <p className="text-sm leading-tight text-grey-dark overflow-ellipsis overflow-hidden line-clamp-2 h-8">
            {raffle.description}
          </p>
          <p className="text-sm leading-tight pb-2 font-bold text-grey-dark">
            {/* {new Date(raffle.date).toLocaleDateString()} */}
            {moment(raffle.drawDate).format("MM/DD/YYYY, h:mm a")}
          </p>
          <Link href={`/view-raffle?id=${raffle._id}`}>
            
            <button  className="secondary_btn py-2 px-4 mx-auto block">
              See more <FontAwesomeIcon className="pl-2" icon={faCaretRight} />
            </button>
            
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RaffleCard