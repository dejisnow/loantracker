'use client'

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export const RegisterUserForm = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter();

   async function handleSubmit(e){
        e.preventDefault()
        if(!firstname || !lastname || !email || !password){
            setError("Fill all required fields")
            return;
        }
        try{
        const fetchExUser = await fetch('api/userCheck',{
            method: 'POST',
            headers: {
              'Content-Type':'application/json',
            },
            body: JSON.stringify({email}),
          })
          const existingUserCheck = await fetchExUser.json()
          console.log(existingUserCheck)
          console.log(typeof(existingUserCheck))
     
          if(existingUserCheck ){
            setError('This email already exists')
            return;
          }
      

         const response =  await fetch('api/registerApi',{
            method: 'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify({
              firstname,
              lastname,
              email,
              password
            }),
          });
          if(response.ok){
            const form = e.target;
            form.reset();
          
            setError('')
            router.push('/login')
          }else{
            console.log('Registration Failed')
          }

        }
        catch(err){
          console.log('error during registration', err)
        }
      

    }

  return (
   <div> 
     <div className="">
     <div className='mx-1'>
      {
        error && (
            <span className="bg-red-400 p-0.5 text-sm rounded-sm ">{error}</span>
        )
      }
            
        </div>
        <form onSubmit={handleSubmit} className="py-5 px-4 border rounded-md md:w-80 items-center shadow-lg shadow-yellow-400 lg" >
                <div className='my-2'>
                    <h1 className='text-xl font-semi-bold'>Register</h1>

                </div>
            <div className="flex flex-col gap-3 " >
                <input onChange={(e)=>setFirstname(e.target.value) } type='text' placeholder='First Name' ></input>
                 <input onChange={(e)=>setLastname(e.target.value)}  type='text' placeholder='Last Name' ></input>
                 <input onChange={(e)=>setEmail(e.target.value)}  type='email' placeholder='Email' ></input> 
                 <input onChange={(e)=>setPassword(e.target.value)}  type='password'  placeholder='Password'></input>

                 <button  className='bg-yellow-300 w-full my-3 rounded-md p-10.5'>Register</button>
                 <Link className="text-center text-sm" href={'/login'} >Already have an account ? Sign in</Link>
            </div>
          
       </form>
       <div>
     
       </div>

     </div>
   </div>
  )
}
