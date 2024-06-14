import { db } from "@/lib/firebase";
import { auth } from "@clerk/nextjs/server";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export const POST=async (req:Request)=>{
    try{
        // currently active user id
        const {userId}=auth();
        const body=await req.json();
        if(!userId){
            return new NextResponse("Un-Authorize",{status:400});
        }
        // extracting name from body
        const {name}=body;
        if(!name){
            return new NextResponse("Store Name is missing",{status:400});
        }
const storeData={
    name,
    userId,
    createdAt:serverTimestamp(),
    
};
// Now add the data to the firebase
const storeRef=await addDoc(collection(db,"stores"),storeData);
// get the reference id
const id=storeRef.id;
await updateDoc(doc(db,"stores",id),{
    ...storeData,
    id,
    updatedAt:serverTimestamp(),
})
// return to the front end
return  NextResponse.json({id,...storeData})

    }catch(error){
        console.log(`STORES_POST:${error}`);
        return new NextResponse("INTERNAL SERVER ERROR",{status:500});

    }

}