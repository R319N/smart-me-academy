import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoDB";
import Student from "@/models/Student";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body.formType) {
      return NextResponse.json(
        { success: false, error: "formType is required" },
        { status: 400 }
      );
    }

    const student = await Student.create(body);

    return NextResponse.json({
      success: true,
      student: student.toObject(),
    });

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error saving student:", error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    console.error("Unknown error saving student:", error);
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 500 }
    );
  }
}
