import { defineQuery } from 'groq'
import React from 'react'
import { sanityFetch } from '../live';

export default async function getSubredditBySlug(slug: string) {

    // const lowerCaseSlug = slug.toLowerCase();
    const slugified = slug.trim().toLowerCase().replace(/\s+/g, "-");


    const getSubredditBySlugQuery = 
        defineQuery(`*[_type == "subreddit" && slug.current == $slug][0] {
            ...,
            "slug": slug.current,
            "moderator": moderator->,
            }`);


        const subreddit = await sanityFetch({
            query: getSubredditBySlugQuery,
            params: {slug: slugified }
        });

        return subreddit.data;
 
}
