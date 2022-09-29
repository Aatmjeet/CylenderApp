import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    uniqueID: String,
    address: String,
    phone: String,
    history:[{
        service:[{
            serviceType: String,
            name: String,
            cost: Number,
        }],
        charge: Number,
        doneAt:{
            type: Date,
        },
    }],    
})

const UserDetails = mongoose.model("userDetails", userSchema);

export default UserDetails;