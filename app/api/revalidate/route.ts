import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  console.log("tuuuuuuu", request.nextUrl.searchParams);
  const path = request.nextUrl.searchParams.get("notes" || "history") || "/";
  revalidatePath(path);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
