import connect from "@/utils/db";
import Mainservice from "@/models/Mainservice";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    await connect();
    const body = await req.json();


    const newmainservice = new Mainservice(body);
    
    try {

        await newmainservice.save();
        return NextResponse.json("Mainservice has been added", { status: 201 });

    } catch (error) {
        return NextResponse.json(`${error}`, { status: 500 });

    }


}










export const GET = async (req: NextRequest) => {
    await connect();
    // const body = await req.json();


    // const newmainservice = new Mainservice(body);
    
    try {
       try {
        const findMainservice= await Mainservice.find({});
        return NextResponse.json(findMainservice, { status: 200 });
       } catch (error) {
       
        return NextResponse.json("not ", { status: 404 });
       }
   

    } catch (error) {
        return NextResponse.json(`${error}`, { status: 500 });

    }


}














