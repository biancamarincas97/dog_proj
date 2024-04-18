import { connectToDB } from "@/utils/database";
import Raffle from "@/models/raffle";

export const GET = async(request, {params}) =>{
    try {
        await connectToDB(); 

        const raffle = await Raffle.findById(params.id).populate('creator');

        if(!raffle) return new Response("Raffle not found!",{status:404})
              
        return new Response(JSON.stringify(raffle),{status:200})
    } catch (error) {
        return new Response("Failed to fetch the raffle!",{status:500})
    }
}



export const PATCH = async(request, {params}) => {
    try {
       
        const {userId} = await request.json();

        await connectToDB();

        const existingRaffle = await Raffle.findById(params.id);
       
        if(!existingRaffle)  return new Response("Raffle not found!", {status: 404});
        
        existingRaffle.participants.push(userId);
        
        await existingRaffle.save();
        
        return new Response(JSON.stringify(existingRaffle), {status: 200});

    } catch (error) {
        return new Response("Failed to update raffle", {status: 500});
    }
}
