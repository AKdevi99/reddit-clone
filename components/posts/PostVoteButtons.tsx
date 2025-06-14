"use client";
import downvote from '@/action/downvote';
import upvote from '@/action/upvote';
import { GetPostVotesQueryResult, GetUserPostVoteStatusQueryResult } from '@/sanity.types'
import { useUser } from '@clerk/nextjs';
import { ArrowDown, ArrowUp } from 'lucide-react';
import React, { useState, useTransition } from 'react'

function PostVoteButtons({
    contentId,
    votes,
    vote,
    contentType = "post"
}: {
    contentId:string,
    votes:GetPostVotesQueryResult,
    vote:GetUserPostVoteStatusQueryResult,
    contentType?: "post" | "comment";
}) {
    const { user,isSignedIn} = useUser();
    const [optimisticVote,setOptimisticVote] = useState<GetUserPostVoteStatusQueryResult>(vote);
    const [optimisticScore,setOptimisticScore] = useState<number>(
        votes.netScore
    );
    const [isPending,startTransition] = useTransition();
    const handleUpvote = () => {
        if( !isSignedIn || isPending) return;

        //calculate score changed based on current vote status
        let scoreChange =0
        if(optimisticVote === "upvote") {
            scoreChange = -1;
            setOptimisticVote(null);
        }else if(optimisticVote === "downvote") {
            //user is changing from downvote to upvote(so +2)
            scoreChange = 2;
            setOptimisticVote("upvote");
        }else {
            scoreChange = 1;
            setOptimisticVote("upvote");
        }

        setOptimisticScore((prev) => prev + scoreChange);

        //make the actual api call in transition
        startTransition(async () =>{
            try {
                await upvote(contentId,contentType);
                
            } catch (error) {
                //if there's error,revert the optimistic updates
                setOptimisticVote(vote);
                setOptimisticScore(votes.netScore);
                console.error(`Falied to upvote ${contentType}:`,error);                
            }
        });
    }

    const handleDownvote = () => {
        if( !isSignedIn || isPending) return;

        //calculate score changed based on current vote status
        let scoreChange =0
        if(optimisticVote === "downvote") {
            scoreChange = 1;
            setOptimisticVote(null);
        }else if(optimisticVote === "upvote") {
            //user is changing from upvote to downvote(so -2)
            scoreChange = -2;
            setOptimisticVote("downvote");
        }else {
            scoreChange = -1;
            setOptimisticVote("downvote");
        }

        setOptimisticScore((prev) => prev + scoreChange);
        startTransition(async () =>{
            try {
                await downvote(contentId,contentType);
                
            } catch (error) {
                //if there's error,revert the optimistic updates
                setOptimisticVote(vote);
                setOptimisticScore(votes.netScore);
                console.error(`Falied to upvote ${contentType}:`,error);                
            }
        });

    }

  return (
    <div className='flex flex-col items-center bg-gray-50 p-2 rounded-l-md'>
        {/* PostVoteButtons */}
        <button 
            disabled={!isSignedIn || isPending || !user}
            onClick={handleUpvote}
            className={`p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed
            ${
                optimisticVote === "upvote" ? "bg-orange-100" : "hover:bg-gray-100"
            } ${isPending ? "opacity-50 cursor-not-allowed": ""}`}
            >
                <ArrowUp 
                    className={`w-5 h-5 ${
                        optimisticVote === "upvote"
                            ? "text-orange-500 font-bold"
                            : "text-gray-400 hover:text-orange-500"
                    }`}
                />
            </button>

            <span className='text-sm font-medium text-gray-900'>
                {optimisticScore}
            </span>


             <button 
            disabled={!isSignedIn || isPending || !user}
            onClick={handleDownvote}
            className={`p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed
            ${
                optimisticVote === "downvote" ? "bg-orange-100" : "hover:bg-gray-100"
            } ${isPending ? "opacity-50 cursor-not-allowed": ""}`}
            >
                <ArrowDown 
                    className={`w-5 h-5 ${
                        optimisticVote === "downvote"
                            ? "text-blue-500 font-bold"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                />
            </button>
      
    </div>
  )
}

export default PostVoteButtons
