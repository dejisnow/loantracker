import mongoose from 'mongoose';
export const connectMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDb')
    }catch(err){
            console.log('Error while connecting to MongoGB:', err)
    }
}