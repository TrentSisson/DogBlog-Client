import React, { useContext, useEffect } from "react"
import { PostContext } from "./PostProvider.js"
import { Post } from "./Post"
export const PostList = (props) => {
    const { getPosts, posts } = useContext(PostContext)
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <article className="postList">
            {
                posts.map(post => {
                    return <Post key={post.id} post={post} />
                
                })
            }
        </article>
    )
}