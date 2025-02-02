
"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
    const router = useRouter();
    const isLoggedIn = true;
    const handleNavigate =()=>{
        if(isLoggedIn){
            router.push('/about/address')
        }else{
            router.push('/')
        }
    }
    return (
        <div>
            <h2 className='font-bold text-3xl'>About</h2>
            <p><Link href="/about/address">Address</Link></p>
            <button onClick={handleNavigate} type='button'>Address</button>
        </div>
    );
};

export default AboutPage;