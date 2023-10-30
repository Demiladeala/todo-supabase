import {NextRequest, NextResponse} from 'next/server'
import dbClient from '@/app/utils/dbClient'
import server from '@/app/utils/supabaseConnection';

type RequestParams = {
   name:string, email: string, password: string
}

export async function POST(req: NextRequest) {
const body = await req.json() as RequestParams

    // const todoResult = await dbClient.todos.create({
    //     data:  {
    //          title: 'Test Todo',
    //          content: 'We are tesing the saving of todos', 
    //          isDelete: false,
    //          userId: userResult.id,
    //     }
    // })

    const result = await server.auth.signUp({email: body.email, password: body.password})
        
    const userResult = await dbClient.user.create({
        data:  {
           email: result.data.user?.email!,
            name: body.name,
        }
    })

    return NextResponse.json(result)
}



export async function GET(req: NextRequest) {
        return NextResponse.json({data: 'fetched with react query'})
}