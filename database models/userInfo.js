import mongoose,{ Schema, models } from "mongoose";

const UserInfoSchema = new Schema ({
    firstname :{
        type: String,
        required:true,

    },
    lastname:{
        type: String,
        required :true,
    },
    email:{
        type:String,
        required :true,

    },
    password:{
        type:String,
        required:true,
    },
    
    
},
{
    timestamps:true
})
//if you already have the model return the userInfo or create a new model called userInfo
const UserInfo = models.UserInfo || mongoose.model('UserInfo', UserInfoSchema)
export default UserInfo