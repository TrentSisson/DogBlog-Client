import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "./PostProvider.js"
export const Post = ({ post }) => {
    const { destroyPost } = useContext(PostContext)
    if (localStorage.getItem("Post_user")) {
        return (
            < section key={`post--${post.id}`} className="postCard" >
                <div className="post__title">Title: {post.title}</div>
                <div className="post__content">Content: {post.content}</div>
                <div className="post__creationDate">Creation Date: {post.post_date}</div>
                <Link key={post.id} id={post.id} to={{ pathname: `/create/${post.id}`, state: { selectedPost: post } }} >
                    <button> Edit Post </button>
                </Link>
                <button onClick={() => {
                    destroyPost(post.id)
                }}> Delete </button>
            </section >
        )
    } else return (
        <section key={`post--${post.id}`} className="postCard" >
            <div className="post__title">Title: {post.title}</div>
            <div className="post__content">Content: {post.content}</div>
            <div className="post__creationDate">Creation Date: {post.post_date}</div>
        </section>
    )
}