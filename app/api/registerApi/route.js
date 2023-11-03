import UserInfo from "@/database models/userInfo";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(request){
    try{
        const {firstname,lastname,email, password} = await request.json();
        const hashPassword = await bcrypt.hash(password,10)
        await connectMongoDB()
        //store the info on the database
        await UserInfo.create({firstname,lastname, email, password: hashPassword})
        // console.log([firstname,lastname,email,password])
            return NextResponse.json({message:'Registered'},{status:201})
    }catch(err){
        return NextResponse.json({message:'Error detected',err},{status:500})
    }
}