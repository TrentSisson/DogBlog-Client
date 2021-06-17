import React, { useContext, useState, useEffect } from "react"
import {PostContext} from "./PostProvider"
export const PostForm=(props)=>{
    const {posts, getPosts, addPost, updatePost}=useContext(PostContext)
    const [post, setPost]=useState({})
    useEffect(() => {
        getPosts()
	}, [])
    const editMode = props.match.params.hasOwnProperty("postId")  // true or false
    const handleControlledInputChange = (event) => {
        const newPost = Object.assign({}, post)  
        newPost[event.target.name] = event.target.value  
        setPost(newPost)                                 
    }
    useEffect(()=>{
        getPostInEditMode()
    },[posts])
    const getPostInEditMode=()=>{
        if(editMode){
            const postId=parseInt(props.match.params.postId)
            const selectedPost=posts.find(t=>t.id===postId)
            setPost(selectedPost)
        }
    }
    // making the new object on submit
    const constructNewPost=()=>{
        const user_id=parseInt(localStorage.getItem("Post_user"))
        if (editMode){
            const newPost={
            id:post.id,
            user:user_id,
            title: post.title,
            date: post.date,
            text: post.text,
            }
            updatePost(newPost).then(props.history.push("/"))
        }
        else{
        const newPost={
            user:user_id,
            title: post.title,
            text: post.text,
        }
        addPost(newPost).then(props.history.push("/"))
        }
    }
    return(
        <>
            <p>New Post</p>
            <form className="postForm">
                <fieldset>
                    <label> Title</label>
                    {post&&<input type="text" name="title" defaultValue={post.title}  onChange={handleControlledInputChange}></input>}
                </fieldset>
                <fieldset>
                    <label> Content</label>
                    {post&&<input type="text" name="text" defaultValue={post.text} onChange={handleControlledInputChange}></input>}
                </fieldset>
            </form>
            <button type="submit"
                onClick={event=>{
                    event.preventDefault()
                    constructNewPost()
                }}> submit
            </button>
        </>
    )
}