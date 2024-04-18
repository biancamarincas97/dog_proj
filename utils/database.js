import mongoose from "mongoose";

let isConnected = false;  //  track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is running!');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "ruffle_land",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log('MongoDB connected!')
    } catch (error) {
        console.log(error);
    }
}