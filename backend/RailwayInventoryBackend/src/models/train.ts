import mongoose from "mongoose";

const schema = mongoose.Schema


const TrainSchema = new schema ({
    trainname:{
        type:String,
        required:true,
    },
    trainnumber:{
        type:Number,
        required:true,
        unique:true,
    },
    start_place:{
        type:String,
        required:true,
    },
    dest_place:{
        type:String,
        required:true,
    },
    seats:{
        type:Number,
        required:true,
    },
   

});
export default  mongoose.model("Train",TrainSchema);
