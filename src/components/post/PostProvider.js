import React from "react"
import { useState } from "react"
import { Token } from "../../Token"
export const PostContext = React.createContext()
export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])
    const getPosts = () => {
        return fetch("http://localhost:8000/posts", {
            headers: {
                "Authorization": "Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed"
            }
        })
            .then(r => r.json())
            .then(setPosts)
    }
    const getPostById = id => {
        return fetch(`http://localhost:8000/posts/${id}`, {
            headers: {
                "Authorization": Token()
            }
        })
            .then(res => res.json())
    }
    const addPost = newPost => {
        return fetch("http://localhost:8000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": Token()
            },
            body: JSON.stringify(newPost)
        })
            .then(newPost)
    }
    const updatePost = (updatedPost) => {
        return fetch(`http://localhost:8000/posts/${updatedPost.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": Token()
            },
            body: JSON.stringify(updatedPost)
        })
            .then(getPosts)
    }
    const destroyPost = id => {
        return fetch(`http://localhost:8000/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": Token()
            }
        })
            .then(getPosts)
    }
    return (
        <PostContext.Provider value={{ posts, setPosts, getPosts, getPostById, addPost, updatePost, destroyPost }}>
            {props.children}
        </PostContext.Provider>
    )
}