import {Schema, model, models} from 'mongoose';

const RaffleSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref: "AccountUser",
    },
    name: {
        type: String,
        unique: [true, 'Raffle name already exists!'],
        required: [true, "Raffle name is required"],
    },
    description: {
        type: String,
        required: [true, "Raffle description is required"],
    },
    participants: [Schema.Types.ObjectId],
    drawDate:{
        type: Date,
        required: [true, "Draw date is required"],
    } ,
    accountWinner:{
        type: Schema.Types.ObjectId,
        ref: "AccountUser",
    },
    guestWinner:{
        type: Schema.Types.ObjectId,
        ref: "GuestUser",
    }     
});

const Raffle = models.Raffle || model("Raffle", RaffleSchema);    
export default Raffle;