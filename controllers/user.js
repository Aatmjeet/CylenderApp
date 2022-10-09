import mongoose from 'mongoose';
import UserDetails from '../models/userDetails.js';

export const getUser = async (req, res) =>{
    const { id } = req.params;
    try{
        const now = new Date();
        console.log(`Endpoint reached for userID: ${id} at time: ${now}`)
        const userDetail = await UserDetails.find({ uniqueID : id });
        
        console.log(userDetail);

        res.status(200).json(userDetail);
    } catch(error){
        res.status(404).json({ message: error.message })
    }
};

export const updateUser = async (req, res) =>{
    const { id: _id } = req.params;
    const user = req.body;

    console.log(`Endpoint for patch reached with id:${_id} and user as ${user.name}`);

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No User with that ID");


    console.log("exectution done till this point");
    const updatedUser = await UserDetails.findByIdAndUpdate({_id}, { history: user.history });

    res.json(updatedUser);
};