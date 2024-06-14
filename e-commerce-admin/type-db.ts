import { Timestamp } from "firebase/firestore";

export interface Store{
    id:String,
    name:String,
    userId:String,
    createdAt:Timestamp,
    updatedAt:Timestamp,
}