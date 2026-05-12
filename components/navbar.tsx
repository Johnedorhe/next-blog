"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

const Navbar = () => {
    const pathname = usePathname()
    const NavLinks = [
        {name: 'Home', href: '/'},
        {name: 'Posts', href: '/posts'},
        {name: 'Add Post', href: '/add-post'},
    ]

  return (
    <nav className='flex gap-2'>
      {
        NavLinks.map((links) => (
            <Link key={links.name} href={links.href}>
                <Button variant={pathname === links.href ? "secondary" : "ghost"}>{links.name}</Button>
            </Link>
        ))
      }
    </nav>
  )
}

export default Navbar
