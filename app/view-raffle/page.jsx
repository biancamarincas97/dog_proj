import React from 'react';
import RaffleView from '@/components/RaffleView';


// page

const ViewRaffle = () => {
  return (
    <Suspense fallback = {<div>Loading raffle page...</div>}>
      <RaffleView/>
    </Suspense>
  )
}

export default ViewRaffle