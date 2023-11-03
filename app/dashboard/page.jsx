'use client'
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

export default function Dashboard(){

    const {data: session}= useSession();
    return(
        <div>
            <h2>{session?.user?.name}</h2>  
            <h2>{session?.user?.email}</h2>    

            <div>
                <button onClick={()=> signOut}>Log out</button>
                
            </div>       
        </div>
    )

} 