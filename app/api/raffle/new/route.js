import Raffle from "@/models/raffle";
import { connectToDB } from "@/utils/database";
import { stringify } from "postcss";

//api route
export const POST = async(req) =>{
    const { userId, name,  description, drawDate, participants} = await req.json();

    try {
        await connectToDB();
        const newRaffle = new Raffle({
            creator: userId,
            name,
            description,
            drawDate,
            participants,
        })
        
        await newRaffle.save();

        return new Response(JSON.stringify(newRaffle), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new raffle", {status: 500})
    }

}