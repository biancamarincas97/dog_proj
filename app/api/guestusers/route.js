import { connectToDB } from "@/utils/database";
import GuestUser from "@/models/guest_user";

export const GET = async(request) =>{
    try {
        await connectToDB();

        const guestUsers = await GuestUser.find({});
        console.log( JSON.stringify(guestUsers));
        return new Response(JSON.stringify(guestUsers),{status:200})
        
    } catch (error) {
        return new Response("Failed to fetch all guest users!",{status:500})
    }
}