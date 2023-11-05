import React from 'react'
import Image from 'next/image'

export const AppInfo = () => {
  return (
    <div>
        <div className='flex h-screen relative'>
          
            <div className='info w-80 flex absolute right-2 bottom-0  justify-center bg-slate-50'>
            <Image  src='/loanImg4.jpg' width={350} height={350}  quality={100} alt='info' />

            </div>
            <div className='info w-80 flex absolute right-6 top-10 justify-center bg-slate-50'>
            <Image  src='/loanImg4.jpg' width={350} height={350}  quality={100} alt='info' />

            </div>

            
        </div>

    </div>
  )
}
