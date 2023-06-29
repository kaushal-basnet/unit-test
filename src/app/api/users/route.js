import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json([
    { id: 1, username: "sanjeeb" },
    { id: 2, username: "anisha" },
    { id: 3, username: "dibesh" },
    { id: 4, username: "raju" },
  ]);
}
