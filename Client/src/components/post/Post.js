import './post.css'
import { MdMoreVert } from "react-icons/md";
import { useState,useEffect, useContext } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import {format} from 'timeago.js' 
import {AuthContext} from "../../context/AuthContext"



const Post = ({post}) => {
    const [like,setLike] = useState(post.likes.length)
    const [isliked , setisliked] = useState(false)
    const [user , setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const {user:currentUser}=useContext(AuthContext)

    
useEffect(()=>{
    setisliked(post.likes.includes(currentUser._id)) 
},[currentUser._id,post.likes])
 


    useEffect(()=>{
        const fetchUser = async()=>{
          const res = await axios.get(`/users?userId=${post.userId}`)  
          setUser(res.data) 
        }
        fetchUser()
      },[post.userId])

    const likeHandler =()=>{
        try{
            axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})

        }catch(err){

        }
        setLike(isliked ?like-1:like+1)
        setisliked(!isliked)
    }

  return (
    <div className='post'> 
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <Link to={`profile/${user.username}`}>
                <img className='postProfileImg' src={user.profilePicture ? PF + user.profilePicture :
                     PF+"person/noAvatar.png"} alt="" /> 
                </Link>
                <span className="postUsername">{user.username}</span>
                <span className="postDate">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight"> 
                <MdMoreVert /> 

            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img  className='postImg' src={PF+post.img} alt="" /> 
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeIcon' alt="" src={`${PF}like.png`}  onClick={likeHandler} />
                <img className='likeIcon' alt="" src={`${PF}heart.png`}   onClick={likeHandler} />
                <span className="postlikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} Comments</span>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Post