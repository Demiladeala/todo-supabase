import { NextResponse, NextRequest } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


type RequestParams = {
    email: string, password: string
}

export async function POST(req: NextRequest){
    const body = await req.json() as RequestParams;
    const server  = createRouteHandlerClient({cookies},{ supabaseUrl :process.env.NEXT_PUBLIC_SUPABASE_URL});

    const result = await server.auth.signInWithPassword({email: body.email, password: body.password});

    return NextResponse.json(result);   
}