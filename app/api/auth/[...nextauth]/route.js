import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/utils/database";
import AccountUser from "@/models/account_user";




const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    callbacks: {

        async session({session}){

            const sessionUser = await AccountUser.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString();
            return session;

        },


        async signIn({profile}){
    
            try{
                await connectToDB();
                
                // check if user exists
    
                const userExists = await AccountUser.findOne({
                    email: profile.email
                })
                
                // if not, create a new user
                if(!userExists){
                    await AccountUser.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                } 
    
                return true;
            } catch(error){
                return false;
            }
    
        }

    }

    
})

export {handler as GET, handler as POST};