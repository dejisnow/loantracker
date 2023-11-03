import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <div className='flex gap-4 p-2 w-full justify-center'>
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>Dashboard</Link>
        <Link href={'/'}>Loans</Link>
        <Link href={'/'}>Contact</Link>

    </div>
  )
}
