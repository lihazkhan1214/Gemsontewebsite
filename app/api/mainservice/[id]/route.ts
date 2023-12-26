import connect from "@/utils/db";
import Mainservice from "@/models/Mainservice";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    const { id } = params;
    await connect();


    try {
       
        const mainservice = await Mainservice.findById(id)

        return  NextResponse.json(mainservice, { status: 200 });
    } catch (err) {
        console.log(err);
        return  NextResponse.json(err, { status: 500 });
    }
};


export const PUT = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    const { id } = params;
    const body=await req.json();
    await connect();    

    try {
        const product = await Mainservice.findByIdAndUpdate(id,body,{new:true})

        return  NextResponse.json("Mainservice has been updated", { status: 201});
    } catch (err) {
        console.log(err);
        return  NextResponse.json(err, { status: 500 });
    }
};