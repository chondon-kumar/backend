import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"


const userSchema = new Schema (
    {
        userName :{
            type: String,
            required : true,
            lowercase : true,
            trim : true,
            unique : true,
            index : true

        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            index : true,
            trim : true,

        },
        fullName : {
            type : String,
            required : true,
            trim : true,
            index : true

        },
        avatar : {
            type : String,
            required : true,
        },
        coverImage :{
            type : String,

        },
        watchHistory : [
            {
                type : Schema.Types.ObjectId,
                ref : "Videos"
            }
        ],
        password : {
            type : String,
            reqired : [true, " Password is required"]
        },
        refressToken : {
            type : String,
            required : true,
        }


    },
    {
        timestamps: true
    }
);

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10);   //use this for use this fuction
    next ();
});

userSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password, this.password)
}
userSchema.methods.genarateAccessToken = function (){
    jwt.sign({
        _id :this._id,
        userName : this.userName,
        email : this.email,
        fullName : this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
       expiresIn : process.env.ACCESS_TOKEN_EXPIRE

    }
)
}

userSchema.methods.genarateRefreshToken = function (){
    jwt.sign({
        _id :this._id
    },
    process.env.REFRESH_TOKEN_SECRET    ,
    {
       expiresIn : process.env.REFRESH_TOKEN_EXPIRE

    }
)
}

export const User = mongoose.model("User", userSchema)
