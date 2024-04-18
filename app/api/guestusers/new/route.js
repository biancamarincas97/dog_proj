import GuestUser from "@/models/guest_user";
import { connectToDB } from "@/utils/database";


//api route
export const POST = async(req) =>{
    const { userId, name, phoneNumber } = await req.json();

    try {
        await connectToDB();
        const newGuestUser = new GuestUser({
            userId: userId,
            name,
            phoneNumber,
        })
        
        await newGuestUser.save();

        return new Response(JSON.stringify(newGuestUser), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new guest user", {status: 500})
    }

}