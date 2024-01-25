import { NextResponse } from "next/server";
import db from "@/app/libs/db";

export async function POST(request) {
    const { email, password, name, address, city, postalCode } = await request.json();
  
    if (!email || !password || !name || !address || !city || !postalCode) {
      return NextResponse
        .json({ success: false, message: "Email and password are required" });
    }
    
    const user = await db.checkUser(email);

    if (user) {
      return NextResponse
        .json({ success: false, message: "User already exists" });
    }

    const newUser = await db.register(email, name, password, address, city, postalCode);
    if (!newUser) {
      return NextResponse
        .json({ success: false, message: "Invalid credentials" });
    }

    return NextResponse.json({ success: true, user });
}