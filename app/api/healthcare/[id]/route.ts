import connect from "@/utils/db";
import Healthcare from "@/models/Healthcare";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

// export const GET = async (
//     req: NextRequest,
//     { params }: { params: { id: string } }
// ) => {
//     const { id } = params;
    
//     await connect();


//     try {
       
//         const healthcare = await Healthcare.findById(id)

//         return  NextResponse.json(healthcare, { status: 200 });
//     } catch (err) {
//         console.log(err);
//         return  NextResponse.json(err, { status: 500 });
//     }
// };

export const PUT = async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    const { id } = params;
    const body = await req.json();
    await connect();
  
    try {
      if (!ObjectId.isValid(id)) {
        return NextResponse.json("Invalid ID", { status: 400 });
      }
  
      const healthcare = await Healthcare.findByIdAndUpdate(id, body, { new: true });
  
      if (!healthcare) {
        return NextResponse.json("Healthcare not found", { status: 404 });
      }
  
      return NextResponse.json("Healthcare has been updated", { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json("Internal Server Error", { status: 500 });
    }
  };
  