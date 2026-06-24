import { NextResponse } from "next/server";
import { createIdentity } from "@/identityEngine";

export async function POST(
  req: Request
) {
  const body = await req.json();

  return NextResponse.json(
    createIdentity(body.wallet)
  );
}
