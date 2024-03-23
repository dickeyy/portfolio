import { NextResponse } from "next/server";

export async function GET(request: Request, response: NextResponse) {
    return NextResponse.json({ message: "hi" }, { status: 200 });
}
