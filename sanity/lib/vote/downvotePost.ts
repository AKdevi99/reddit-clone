import { defineQuery } from 'groq'
import React from 'react'
import { sanityFetch } from '../live';
import { adminClient } from '../adminClient';
import { voteType } from '@/sanity/schemaTypes/voteType';

export default async function downvotePost(postId: string , userId: string) {
    //check if user has already voted on this post
    const existingVoteDownvoteQuery = defineQuery(
        `*[_type == "vote" && post._ref == $postId && user._ref == $userId][0]`
    );

    const existingVote = await sanityFetch({
        query: existingVoteDownvoteQuery,
        params: {postId, userId},
    });

    if (existingVote.data){
        const vote = existingVote.data;

        //if there is already an downvote ,remove it
        if(vote.voteType === "downvote"){
            return await adminClient.delete(vote._id);
        }


        //if there is a upvote, change it to an downvote
        if(vote.voteType === "upvote"){
            return adminClient
            .patch(vote._id)
            .set({voteType:"downvote"})
            .commit();
        }
    }
    
    //create a downvote
    return await adminClient.create({
        _type: "vote",
        post: {
            _type: "reference",
            _ref: postId,
        },
        user: {
            _type: "reference",
            _ref: userId,
        },
        voteType : "downvote",
        createdAt: new Date().toISOString(),
    });
}
