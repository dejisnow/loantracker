import React from 'react'
import Image from 'next/image'

export const AppInfo = () => {
  return (
    <div className='flex flex-col'>
        <div className='h-screen flex-col flex md:flex-row relative '>
        <div className=' my-10  text-justify flex-50'>
            <div>
                <h2 className='text-xl my-4 text-center font-bold'>Check it out</h2>
            </div>

            <div className='px-4 '>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Libero, maiores vero? Cumque praesentium expedita, delectus libero perspiciatis nobis vitae earum iusto velit qui in illum, consectetur ullam pariatur quos eaque.
            </p>
            <div className='my-4'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur libero animi deleniti 
                doloremque dolorem ipsa obcaecati ad? Dolores, totam nemo.</p>
            </div>

            </div>
          
          </div>

          
            <div className='info hidden md:flex flex-50 justify-center '>
            <Image  src='/loanImgCar.jpg' className='rounded-lg top-20 absolute' style={{objectFit:'contain'}} width={350} height={350}  quality={100} alt='info' />

            </div>
         
     

            
        </div>
      

    </div>
  )
}
