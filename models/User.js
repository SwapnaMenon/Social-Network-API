const {Schema, model} = require("mongoose")


const userSchema = new Schema({
    userName:{
        type:String, 
        required:true, 
        trim:true, 
        unique:true, 
    },
    email:{
        type:String, 
        required:true, 
        trim:true, 
        unique:true, 
    }, 
    thoughts:[
        {
            type:Schema.Types.ObjectId, 
            ref:"Thought", 
        }
    ],
    friends:[
        {
            type:Schema.Types.ObjectId, 
            ref:"User", 
        }
    ]
},{
    toJSON:{virtuals:true}
} )

userSchema.virtual("friendAccount").get(function(){return this.friends.length})

const User = model ("User", userSchema)
module.exports = User

