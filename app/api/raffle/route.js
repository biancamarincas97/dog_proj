import Raffle from "@/models/raffle";
import { connectToDB } from "@/utils/database";

export const GET = async(request) =>{
    try {
        await connectToDB();

        const raffles = await Raffle.find({}).populate('creator');
        console.log( JSON.stringify(raffles));
        return new Response(JSON.stringify(raffles),{status:200})
        
    } catch (error) {
        return new Response("Failed to fetch all raffles!",{status:500})
    }
}