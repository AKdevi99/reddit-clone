import { defineQuery } from 'groq'
import React from 'react'
import { sanityFetch } from '../live';
import { adminClient } from '../adminClient';
import { voteType } from '@/sanity/schemaTypes/voteType';

export default async function upvoteComment(commentId: string , userId: string) {
    //check if user has already voted on this comment
    const existingVoteUpvoteCommentQuery = defineQuery(
        `*[_type == "vote" && comment._ref == $commentId && user._ref == $userId][0]`
    );

    const existingVote = await sanityFetch({
        query: existingVoteUpvoteCommentQuery,
        params: {commentId, userId},
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
        comment: {
            _type: "reference",
            _ref: commentId,
        },
        user: {
            _type: "reference",
            _ref: userId,
        },
        voteType : "upvote",
        createdAt: new Date().toISOString(),
    });
}
