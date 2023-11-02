import { NextResponse, NextRequest } from "next/server";
import dbClient from "@/app/utils/dbClient";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
// import server from "@/app/utils/supabaseConnection";


type RequestParams = {
    title:string, content:string, isDelete:boolean, 
}

export async function POST(req: NextRequest) {
    const body = await req.json() as RequestParams


const server  = createRouteHandlerClient({cookies},{ supabaseUrl :process.env.NEXT_PUBLIC_SUPABASE_URL})
    //from the session, you will need to get the logged in user 
    const result = (await server.auth.getSession()).data.session?.user;
    console.log({result});

    //find if that user exist on the user table and get the Id 

        const user = await dbClient.user.findFirst({
            where: {
                email: result?.email
            }
        })
        console.log({user});

        const userId = user?.id

// Insert the userId into the Todos table as the user creating the todo.
    if(userId !== undefined) {
        const todoResult = await dbClient.todos.create({
            data: {
                content: body.content,
                isDelete: false,
                userId: userId,
            }
        })
        console.log({todoResult});
        return NextResponse.json(todoResult);
    }

}

export async function GET(req: NextRequest) {

    const result = await dbClient.todos.findMany();

    return NextResponse.json(result);
}