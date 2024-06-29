// app/api/greet/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const requestBody = await request.json();
  const { name } = requestBody;
  console.log(requestBody, ">>>>>>>>>>>>>>>>>>>>>>>..")
  
  return new NextResponse(JSON.stringify({ message: `Hello, ${name}!` }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
// app/api/submit-ticket/route.ts