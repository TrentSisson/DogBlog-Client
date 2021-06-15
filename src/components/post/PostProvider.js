import React from "react"
import { useState } from "react"
export const PostContext = React.createContext()
export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])
    const getPosts = () => {
        return fetch("http://localhost:8000/posts", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("Post_user")}`
              }
        })
        .then(r => r.json())
        .then(setPosts)
    }
    const addPost = newPost => {
        return fetch("http://localhost:8000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("Post_user")}`
            },
            body: JSON.stringify(newPost)
        })
            .then(newPost)
    }
    const updatePost=(updatedPost)=>{
        return fetch(`http://localhost:8000/posts/${updatedPost.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("Post_user")}`
            },
            body: JSON.stringify(updatedPost)
        })
            .then(getPosts)
    }
    const destroyPost = id => {
        return fetch(`http://localhost:8000/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("Post_user")}`
              }
        })
        .then(getPosts)
    }
    return (
        <PostContext.Provider value={{posts, setPosts, getPosts, addPost, updatePost, destroyPost}}>
            {props.children}
        </PostContext.Provider>
    )
}