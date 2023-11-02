import {createRouteHandlerClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from 'next/headers'

        const server  = createRouteHandlerClient({cookies},{ supabaseUrl :process.env.NEXT_PUBLIC_SUPABASE_URL})

export default server;