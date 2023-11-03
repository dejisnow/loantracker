import UserInfo from "@/database models/userInfo";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
export async function POST(request){
    try{
        await connectMongoDB();
        const { email } = await request.json();
        
       const existingUser =  await UserInfo.findOne({email}).select('_id');
            console.log(existingUser,'user exits')
            return NextResponse.json(existingUser)

    }catch(err){
        console.log('There was an error',err)
    }
   
    
}