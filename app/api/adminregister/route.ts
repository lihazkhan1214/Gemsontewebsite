import connect from "@/utils/db";
import Superadmin from "@/models/Superadmin";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export const POST = async (req: NextRequest) => {
    await connect();
    const body = await req.json();
    const {password}=body;
    const newpassword=bcrypt.hashSync(password,10);


    const newhealthcare = new Superadmin({...body,password:newpassword});
    
    try {

        await newhealthcare.save();
        return NextResponse.json("Superadmin has been added", { status: 201 });

    } catch (error) {
        return NextResponse.json(`${error}`, { status: 500 });

    }


}
