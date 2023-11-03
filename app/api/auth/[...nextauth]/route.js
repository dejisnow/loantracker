import UserInfo from "@/database models/userInfo";
import { connectMongoDB } from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'


const authOptions = {
    providers: [
        CredentialsProvider({
            name:'credentials',
            credentials:{},
            async authorize(credentials){
              const {email, password} = credentials;

              try{
                await connectMongoDB();
                const currentUser = await UserInfo.findOne({email});

                if(!currentUser){
                    return null
                }
                const passwordValidation = await bcrypt.compare(password, currentUser.password);
                if(!passwordValidation){
                    return null
                }
                return currentUser
              }catch(err){
                console.log(err)
              }
            }
        })
       
    ],
    session :{
        strategy :'jwt'
    },
    secret :process.env.NEXTAUTH_SECRET,
    pages: {
        siginIn :'/login'
    },
};


const authHandler = NextAuth(authOptions);


 export { authHandler as GET ,authHandler as POST }; 