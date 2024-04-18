import React from 'react';
import Feed from '@/components/Feed';


const Home = () => {
    return (
    
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-right">
        
           RuffLE Land
           <img src="/assets/icons/happy.png" alt="dog_icon" width={60} height={60} className="inline-block align-middle ml-3" /> 
            <br className="max-md:hidden"/>
            <span className="white_gradient text-left font-nunito" >Create and join </span>
            <br/>
            <span className="white_gradient text-left font-nunito" >ruffles in one tap</span>
        </h1>
        <p className="desc text-justify text-3xl font-nunito">
        Welcome to Ruff-le Land, the website that’s got tails wagging with excitement! This is the ultimate platform for hosting and entering raffles with ease . Whether you’re looking to win big or raise funds for a cause close to your heart, Ruff-le Tickets makes it simple and fun. With a user-friendly interface and a bark-worthy selection of prizes, every raffle feels like a walk in the park. So why wait? Join the pack and start your raffle adventure with Ruff-le Land today
        </p>
        <div className="w-20 pb-2">
          <button className="bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600"></button>
        </div>

         <Feed/> 
    </section>

  )
}

export default Home