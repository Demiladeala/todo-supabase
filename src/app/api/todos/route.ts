import { NextResponse, NextRequest } from "next/server";
import dbClient from "@/app/utils/dbClient";
import server from "@/app/utils/supabaseConnection";


type RequestParams = {
    title:string, content:string, isDelete:boolean, 
}

export async function POST(req: NextRequest) {
    const body = await req.json() as RequestParams


    //from the session, you will need to get the logged in user 
    const result = (await server.auth.getSession()).data.session?.user;
    console.log(result);

    //find if that user exist on the user table and get the Id 

        const user = await dbClient.user.findFirst({
            where: {
                email: result?.email
            }
        })
        console.log(user);

// Insert the userId into the Todos table as the user creating the todo.
    const todoResult = await dbClient.todos.create({
        data: {
            title: body.title,
            content: body.content,
            isDelete: false,
            userId: user?.id!
        }
    })
    console.log(todoResult);

    return NextResponse.json(todoResult);
}