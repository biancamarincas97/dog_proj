import { connectToDB } from "@/utils/database";
import GuestUser from "@/models/guest_user";
import Raffle from "@/models/raffle";


export const GET = async(request, {params}) =>{      
    try {
        await connectToDB();

        const raffles = await Raffle.find({
            creator: params.id
        }).populate('creator');

        return new Response(JSON.stringify(raffles),{status:200})
    } catch (error) {
        return new Response("Failed to fetch all raffles!",{status:500})
    }
}