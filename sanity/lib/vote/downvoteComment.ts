import { defineQuery } from 'groq'
import React from 'react'
import { sanityFetch } from '../live';
import { adminClient } from '../adminClient';
import { voteType } from '@/sanity/schemaTypes/voteType';

export default async function upvoteComment(commentId: string , userId: string) {
    //check if user has already voted on this comment
    const existingVoteDownvoteCommentQuery = defineQuery(
        `*[_type == "vote" && comment._ref == $commentId && user._ref == $userId][0]`
    );

    const existingVote = await sanityFetch({
        query: existingVoteDownvoteCommentQuery,
        params: {commentId, userId},
    });

    if (existingVote.data){
        const vote = existingVote.data;

        //if there is already an upvote ,remove it
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
        comment: {
            _type: "reference",
            _ref: commentId,
        },
        user: {
            _type: "reference",
            _ref: userId,
        },
        voteType : "downvote",
        createdAt: new Date().toISOString(),
    });
}
