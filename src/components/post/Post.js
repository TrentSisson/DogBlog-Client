import React from "react"
import { Link } from "react-router-dom"
import "./Post.css"

export const Post = ({ post }) => {


    return (
        < section key={`post--${post.id}`} className="postCard" >
            <div className="Details">Title:{post.title}<Link key={post.id} id={post.id} to={{ pathname: `/details/${post.id}`, state: { selectedPost: post } }} > <button>READ</button></Link></div>
            <div className="date">Created:{post.date}</div>
        </section >
    )
}