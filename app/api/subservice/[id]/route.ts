import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import Subservice from "@/models/Subservice";
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    const { id } = params;
    await connect();


    try {
       
        const subservice = await Subservice.findById(id)

        return  NextResponse.json(subservice, { status: 200 });
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
        const product = await Subservice.findByIdAndUpdate(id,body,{new:true})

        return  NextResponse.json("Subservice has been updated", { status: 201});
    } catch (err) {
        console.log(err);
        return  NextResponse.json(err, { status: 500 });
    }
};