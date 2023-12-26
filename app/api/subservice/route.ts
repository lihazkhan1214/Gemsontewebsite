import connect from "@/utils/db";
import Subservice from "@/models/Subservice";
import { NextRequest, NextResponse } from "next/server";






export const POST = async (req: NextRequest) => {
    await connect();
    const body = await req.json();


    const newsubservice = new Subservice(body);
    
    
    try {

        await newsubservice.save();
        return NextResponse.json("Subservice has been added", { status: 201 });

    } catch (error) {
        return NextResponse.json(`${error}`, { status: 500 });

    }


}










export const GET = async (req: NextRequest) => {
    await connect();
    // const body = await req.json();


    // const newmainservice = new Subservice(body);
    
    try {
       try {
        const findMainservice= await Subservice.find({});
        return NextResponse.json(findMainservice, { status: 200 });
       } catch (error) {
       
        return NextResponse.json("not ", { status: 404 });
       }
   

    } catch (error) {
        return NextResponse.json(`${error}`, { status: 500 });

    }


}














