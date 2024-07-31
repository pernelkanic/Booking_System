import { Request, Response } from "express";
import train from "../models/train";

export  const createTrain = async(req : Request , res: Response)=>{
    
    try{
        const {
            trainname ,
            trainnumber, 
            start_place,
            dest_place,
            seats,
            
        } = req.body;
        const newtrain  = await train.create({trainname,trainnumber,start_place,dest_place ,seats});
        res.status(200).json(newtrain);
        }
        catch(err){
            res.status(400).json({err:(err as Error).message});
        }


}
export const getTrains = async(req : Request, res : Response) =>{
    try{
        const get_trains = await train.find({});
        res.status(200).json({
            get_trains
        });

    }
    catch(e:unknown){
        res.status(500).json({err:(e as Error).message});
    }
}
export const getTrainById = async(req:Request , res:Response) =>{
    try{
        const train_id = req.params.id;
        console.log(train_id);
        
        const train_details = await train.findById(train_id);
        if(!train_details){
            res.status(400).json({
                message:"No Train Details"
            })
        }
        res.status(200).json({
            train_details
        })

    }
    catch(e : unknown){
        res.status(500).json({err : (e as Error).message});
    }
}