import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://staremosh:Password1@cluster0.r3snr3k.mongodb.net/Food Delivery Website').then(()=>console.log("DB Connected"));
}