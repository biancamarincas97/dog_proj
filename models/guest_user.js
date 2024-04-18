import {Schema, model, models} from 'mongoose';


const GuestUserSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name is required!'],
    },
    phoneNumber: {
        type: String,
        // unique: true,
        required: [true, 'Phone number is required!'],
        match: [/^\+\d{1,3}(\s)?(\d{1,4}[-\s]?){2,14}$/, 'Please enter a valid phone number']
    },
});

const GuestUser = models.GuestUser || model("GuestUser", GuestUserSchema);       
export default GuestUser;