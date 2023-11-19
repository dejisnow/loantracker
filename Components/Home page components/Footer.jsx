import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className='flex justify-around  '>

        <div className=''>
            <div className='my-3'>
            <h3 className='text-xl'>Servces</h3>
            </div>
            <div className='flex text-sm gap-2 flex-col'>
                <Link href={'/'}>Loan tools</Link>
                <Link href={'/'}>Amortization</Link>
                <Link href={'/'}>Getting started</Link>
                <Link href={'/'}>Loan information</Link>
             
            </div>

        </div>

        <div className=''>
            <div className='my-3'>
            <h3 className='text-xl'>Guide</h3>
            </div>
            <div className='flex text-sm gap-2 flex-col'>
                <Link href={'/'}>Api Documentation</Link>
                <Link href={'/'}>Security</Link>
                <Link href={'/'}>FAQs</Link>
                <Link href={'/'}>Terms & conditions</Link>
                
            </div>

        </div>

        <div className=''>
            <div className='my-3'>
            <h3 className='text-xl'>Our Company</h3>
            </div>
            <div className='flex text-sm gap-2 flex-col'>
                <Link href={'/'}>About Us</Link>
                <Link href={'/'}>Networks</Link>
                <Link href={'/'}>Contact Us</Link>
          
            </div>

        </div>

        <div className=''>
            <div className='my-3'>
            <h3 className='text-xl'>Our Company</h3>
            </div>
            <div className='flex text-sm gap-2 flex-col'>
                <Link href={'/'}>About Us</Link>
                <Link href={'/'}>Networks</Link>
                <Link href={'/'}>Contact Us</Link>
          
            </div>

        </div>



        </div>
       
 




    </div>
  )
}
