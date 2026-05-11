import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './navbar'

const Header = () => {
  return (
    <div className='flex justify-between p-2'>
    <Link href="/">
    <Image src="/jaceedo.png" width={50} height={50} alt='logo' />
    </Link>
    <Navbar />
      Header
    </div>
  )
}

export default Header