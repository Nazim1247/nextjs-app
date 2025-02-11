"use server";

import dbConnect from "@/lib/dbConnect";

export const registerUser = async (payload)=>{
    try{
        // need to check uniq user name
        const result = await dbConnect("test-user").insertOne(payload);
        return result;
    }catch(error){
        console.log(error)
        return null
    }
}