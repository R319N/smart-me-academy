import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoDB";
import Student from "@/models/NewStudent";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json(); // <-- JSON now, not formData
    const student = new Student(body);

    await student.save();

    return NextResponse.json({ success: true, student });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error saving student:", error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
    // Fallback if error is not an instance of Error
    console.error("Unknown error saving student:", error);
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 500 }
    );
  }
}
