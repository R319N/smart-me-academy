import { NextResponse } from "next/server";
import Student from "@/models/NewStudent";
import { connectDB } from "@/lib/mongoDB";
// import Student from "@/models/Student";

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.formData();

    const studentData: any = {};
    data.forEach((value, key) => {
      studentData[key] = value;
    });

    const student = await Student.create(studentData);

    return NextResponse.json({ success: true, student });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
