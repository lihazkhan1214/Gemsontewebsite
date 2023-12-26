import connect from "@/utils/db";
import Healthcare from "@/models/Healthcare";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest) => {
    await connect();
    const body = await req.json();


    const {password}=body;
    const newpassword=bcrypt.hashSync(password,10);


    const newhealthcare = new Healthcare({...body,password:newpassword});
    
    try {

        await newhealthcare.save();
        return NextResponse.json("Healthcare has been added", { status: 201 });

    } catch (error) {
        return NextResponse.json(`${error}`, { status: 500 });

    }


}










export const GET = async (req: NextRequest) => {
    await connect();
    // const body = await req.json();


    // const newhealthcare = new Healthcare(body);
    
    try {
       try {
        const findHealthcare= await Healthcare.find({});
        return NextResponse.json(findHealthcare, { status: 200 });
       } catch (error) {
       
        return NextResponse.json("not ", { status: 404 });
       }
   

    } catch (error) {
        return NextResponse.json(`${error}`, { status: 500 });

    }


}














