'use client';

import { useUser } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

export default function CreatePost() {

    const router = useRouter();
    const {user} = useUser();
    const pathname = usePathname();


    const handleCreatePost = () =>{
        //extract the community name from the pathname
        const communityName = pathname.includes("/community/")
        ? pathname.split("/community/")[1]
        : null;

        //if we are at community redirect to create post with that community
        if(communityName){
            router.push(`/create-post?subreddit=${communityName}`);

        }else {
            //otherwise just go to the create post page
            router.push("/create-post");
        }


        }
    

  return (
    <Button onClick={handleCreatePost} disabled={!user}>
        <Plus className='w-4 h-4 mr-2' />
        {user ? "Create Post" : "Sign in to create post"}
    </Button>
  );
}
