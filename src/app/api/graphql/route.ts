import { NextRequest } from "next/server";

import nextHandler from "../graphql";

export async function GET(req: NextRequest) {
  return nextHandler(req);
}

export async function POST(req: NextRequest) {
  return nextHandler(req);
}
