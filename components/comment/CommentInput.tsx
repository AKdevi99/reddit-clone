"use client";
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react'
import { form } from 'sanity/structure';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

function CommentInput(
    {
        postId,
        parentCommentId,
    }: {
        postId:string;
        parentcommentId?:string;
    }){
        const [content, setContent] = useState("");
        const [isPending, startTransition] = useTransition();
        const router = useRouter();
        const {user} = useUser();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>  {
        e.preventDefault();
        
    }
  return (
    <form onSubmit={handleSubmit} className='flex gap-2 mt-2'>
        <Input 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder={user ? "Add a comment..." : "Sign in to comment"}
            disabled={isPending || !user}
        />
        <Button
            type="submit"
            variant="outline"
            disabled={isPending || !user || content.length === 0}
            >
            {isPending ? "Commenting..." : "Comment"}
        </Button>
    </form>
  )
}

export default CommentInput
