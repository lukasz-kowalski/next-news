// just an example of Route Handler

import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  console.log(request);

  return new Response("Hello!");
}
