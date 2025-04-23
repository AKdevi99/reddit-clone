import { defineField,defineType } from "sanity";
import { TagIcon } from "lucide-react";

export const commentType = defineType({
    name:"comment",
    title: "Comment",
    type: "document",
    icon: TagIcon,
    description: "A comment on a post or another comment",
    fields: [
        defineField({
            name:"content",
            title:"Content",
            type:"text",
            description: "the text content of the comment",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"author",
            title:"Author",
            type:"reference",
            description: "the user who wrote this comment",
            to: [{type: "user"}],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"description",
            title:"Description",
            type:"text",
            description: "A brief description of what this subreddit is about",
            
        }),
        defineField({
            name:"post",
            title:"Post",
            type:"reference",
            description: "the post this comment belongs to(even for nested comments)",
            to: [{type: "post"}],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"comment",
            title:"Comment",
            type:"reference",
            description: "If this is a reply, reference to the parent comment",
            to: [{type: "comment"}],
        }),
        defineField({
            name:"isReported",
            title:"Is Reported",
            type:"boolean",
            description: "Indicates if this comment has been reported by users",
            initialValue: false,
        }),
        defineField({
            name:"createdAt",
            title:"Created At",
            type:"datetime",
            description: "When this subreddit was created",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"isDeleted",
            title:"Is Deleted",
            type:"boolean",
            description: "Indicates if this comment has been deleted",
            initialValue: false,
        }),   
    ],
    preview: {
        select: {
            title: "content",
            media: "author.username"
        },
        prepare({title, media}){
            return {
                title,
                media,
            };
        },
    },
});