'use client'
import Image from 'next/image'

import React from 'react'

const Hero = () => {
  function signUp(){
    

  }


  return (
    <div className='flex flex-col my-4 w-full h-screen bg-yellow-100 relative justify-around'>
        <div className='flex justify-between ' >
           
         
            {/* <div className='w-40 h-40 absolute bottom-4 left-6 bg-blue-100 blur-3xl'></div> */}
            <div className='left flex-50  m-10'>
                <div className='text-center z-10'>
                    <h2  className='text-3xl font-bold'> Manage Loans, Maximize life.</h2>
                    <p className='text-justify my-5'>Welcome to LoanTrack, where we help you keep your financial journey on track.
                         Take control of your loans,
                         monitor your progress, and move confidently towards a debt-free future.</p>
                      
                        
                    
                </div>
                <button onClick={signUp} className='bg-yellow-300 mt-8 rounded-lg p-1.5'>Create an account</button>
            </div>
            <div className='right flex-50 m-10 max-md:hidden rounded-full bg-yellow-200 '>
              <div className='img__div flex flex-col gap-2'>
              <div className='hero__right flex justify-between gap-2 '>
            
             <Image className='image1 z-10 rounded-xl absolute left-24   shadow-2xl '
              src='/loanImg2.jpg' alt='clock'
              quality={'100'}
     
            width='400'
             height='400' />
              
              {/*
               <Image className='z-1 rounded-xl absolute right-10 top-32  shadow-2xl '
              src='/loanImg1.jpg' alt='clock'
              quality={'100'}
     
            width='250'
             height='300' /> 
             */}


              <div className='z-1000 absolute w-4/5 left-4 top-60'>
              <div>
               
             
            </div>
          
            </div>
         
          </div>
          <div className='w-full h-full rounded-lg '>
         
           

          </div>
                
              </div>
             

            </div>
        </div>
        <div>
          Bottom
            <div className='bg-yellow-200 rounded-3xl  mx-9 h-32  shadow-lg'></div>

        </div>

    </div>
  )
}

export default Hero