import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videoFile : {
            type : String,
            required : true,

        },
        tumbnil : {
            type : String, // url from cloudinary
            required : true,

        },
        description : {
            type : String ,
            required : true,

        },
        title : {
            type : String,
            required : true,

        },
        owner :{
            type : Schema.Types.ObjectId,
            ref : "User"
        },
        isPublished : {
            type : Boolean,
            default : true,
        },
        views : {
                type : Number,
                default : 0
            },
        duretion : {
            type : Number,
            required : true,
        }
    },
    {
        timestamps:true
    }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Videos = mongoose.model("Videos", videoSchema)