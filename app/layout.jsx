import React from 'react';
import "@/styles/globals.css"
import Provider from '@/components/Provider';
import Nav from '@/components/Nav';

export const metadata = {
    title: "Ruff-le Land",
    description: "Welcome to Ruff-le Land, the website that’s got tails wagging with excitement! This is the ultimate platform for hosting and entering raffles with ease. Whether you’re looking to win big or raise funds for a cause close to your heart, Ruff-le Tickets makes it simple and fun. With a user-friendly interface and a bark-worthy selection of prizes, every raffle feels like a walk in the park. So why wait? Join the pack and start your raffle adventure with Ruff-le Land today"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="app_container"/>
                   
                    <main className="nav_container">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout; 