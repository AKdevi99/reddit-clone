"use client"
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';

import ReddistLogo from "@/images/Reddist_Full (1).png"
import ReddistLogoOnly from "@/images/Reddist_Logo_Only.png"
import {ChevronLeftIcon, MenuIcon} from "lucide-react"
import { useSidebar } from '../ui/sidebar';


function Header() {
    // const {user} = useUser();
    const {toggleSidebar,open,isMobile} = useSidebar();

    // const isBanned = user?.publicMetadata["IS_BANNED"] as boolean ;


  return (
    <header className='flex items-center justify-between p-4 py-2 border-b border-gray-200' >
        {/* left side */}
        <div className='flex items-center h-10'>
            {open && !isMobile ? (
                <ChevronLeftIcon className='w-6 h-6' onClick={toggleSidebar}/>
            ): (
                <div className='flex items-center gap-2'>
                    <MenuIcon className="2-6 h-6"  onClick={toggleSidebar}/>
            <Image 
                src={ReddistLogo}
                alt="logo"
                width={150}
                height={150}
                className="hidden md:block"
            />
            <Image 
                src={ReddistLogoOnly}
                alt="logo"
                width={40}
                height={40}
                className="block md:hidden"
            />
                </div>
            )}
            
        </div>

        {/* right side */}

        <div>
            <SignedIn>
                <UserButton/>
            </SignedIn>


            <SignedOut>
                <Button asChild variant={'outline'}>
                    <SignInButton mode='modal'/>
                </Button>
                
            </SignedOut>
        </div>
    </header>
  )
}

export default Header
