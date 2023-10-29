import { NextResponse } from "next/server";

// FETCH ALL CATEGORIES
export const GET = async () => {
  return new NextResponse("Hello", { status: 200 });
};
