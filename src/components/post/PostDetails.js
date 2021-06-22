import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { PostContext } from "./PostProvider.js"
export const PostDetails = props => {
    const { destroyPost, getPostById } = useContext(PostContext)
    const [post, setPost] =useState({})
    useEffect(() => {
        getPostById(props.match.params.postId)
            .then(post => setPost(post))
    }, [])
    const history = useHistory()
    if (localStorage.getItem("Post_user")) {
        return (
            < section key={`post--${post.id}`} className="postCard" >
                <div className="post__title">Title: {post.title}</div>
                <div className="post__content">Content: {post.text}</div>
                <div className="post__creationDate">Creation Date: {post.date}</div>
                <Link key={post.id} id={post.id} to={{ pathname: `/create/${post.id}`, state: { selectedPost: post } }} >
                    <button> Edit Task </button>
                </Link>
                <button onClick={() => {
                    destroyPost(post.id)
                    .then(history.push({ pathname: "/" }))
                }}> Delete </button>
            </section >
        )
    } else return (
        <section key={`post--${post.id}`} className="postCard" >
            <div className="post__title">Title: {post.title}</div>
            <div className="post__content">Content: {post.text}</div>
            <div className="post__creationDate">Creation Date: {post.date}</div>
        </section>
    )
}