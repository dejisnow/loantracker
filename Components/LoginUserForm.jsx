'use client'
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const LoginUserForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router  = useRouter()

    async function handleSubmit(e){
      e.preventDefault()
      try{
        const response = await signIn('credentials',{
          email,password, redirect:false,
        });
        if(response.error){
          setError('Invalid credentials');
          return;
        }
        router.replace('dashboard')
        
      }catch(err){
        console.log(err, 'error siginin in')
      }

    }


  return (
    <div> 
        <div className='mx-1'>
        {
        error && (
            <span className="bg-red-400 p-0.5 text-sm rounded-sm ">{error}</span>
        )
      }
        </div>
         <form onSubmit={handleSubmit} className="py-5 px-4 border rounded-md w-75 md:w-80 items-center shadow-lg shadow-yellow-400 lg" >
                <div className='my-2'>
                    <h1 className='text-xl font-semi-bold'>Login</h1>

                </div>
            <div className="flex flex-col gap-3 " >
                
                 <input onChange={(e)=>{ setEmail(e.target.value)}} type='email' placeholder='Email' ></input> 
                 <input onChange={(e)=>{ setPassword(e.target.value)}} type='password' placeholder='Password'></input>

            </div>
           <button className='bg-yellow-300 w-full my-3 rounded-md p-10.5'>Login</button>
       </form>


        
    </div>
  )
}
