import { defineQuery } from 'groq'
import React from 'react'
import { sanityFetch } from '../live';
import { adminClient } from '../adminClient';
import { voteType } from '@/sanity/schemaTypes/voteType';

export default async function upvotePost(postId: string , userId: string) {
    //check if user has already voted on this post
    const existingVoteUpvoteQuery = defineQuery(
        `*[_type == "vote" && post._ref == $postId && user._ref == $userId][0]`
    );

    const existingVote = await sanityFetch({
        query: existingVoteUpvoteQuery,
        params: {postId, userId},
    });

    if (existingVote.data){
        const vote = existingVote.data;

        //if there is already an upvote ,remove it
        if(vote.voteType === "upvote"){
            return await adminClient.delete(vote._id);
        }


        //if there is a downvote, change it to an upvote
        if(vote.voteType === "downvote"){
            return adminClient
            .patch(vote._id)
            .set({voteType:"upvote"})
            .commit();
        }
    }
    
    //create a upvote
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
        voteType : "upvote",
        createdAt: new Date().toISOString(),
    });
}
