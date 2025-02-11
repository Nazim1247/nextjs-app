"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
// import Register from '../register/components/Register';
// import LoginButton from './LoginButton';

const Navbar = () => {
    const pathname = usePathname();
    // console.log(pathname,pathname.includes('dashboard'))
    if(!pathname.includes('dashboard')){
        return (
            <div>
              <nav className='flex justify-center'>
              <ul className='flex justify-between items-center w-1/2'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/services"><li>Services</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/posts"><li>Posts</li></Link>
                <Link href="/meals"><li>Meals</li></Link>
                <Link href="/products"><li>Products</li></Link>
                <Link href="/products/add"><li>Add Products</li></Link>
                <Link href="/register"><li>Register</li></Link>
                
              </ul>
            </nav>  
            </div>
        );
    }else{
        <></>
    }
    
};

export default Navbar;