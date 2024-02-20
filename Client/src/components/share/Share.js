import { useContext, useRef, useState } from 'react';
import './share.css'
import { MdPermMedia,MdLabel,MdLocationOn,MdEmojiEmotions } from "react-icons/md";
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import {Cancel} from '@mui/icons-material'


const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const desc = useRef()
  const {user} = useContext(AuthContext)
  const [file,setFile] = useState(null)

  
  const submitHandler =async(e)=>{
    e.preventDefault() 
    const newPost = {
        userId: user._id,
        desc: desc.current.value,
    }
    if(file){
        const data = new FormData()
        const fileName=file.name; 
        data.append("file",file)
        data.append("name",fileName)
        newPost.img = fileName
        try{
            await axios.post("/upload",data)
        }catch(err){
            console.log(err)
        }
    }
    try{
       await axios.post("/posts",newPost)
       window.location.reload()

    }catch(err){
    }
  }

  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"}  alt="" />
                <input type="text" placeholder={"what's in your Mind "+user.username+"?"} 
                className='shareInput'
                ref={desc} 
                />
            </div>
            <hr  className='shareHr'/>
            {file && (
                <div className="shareImgContainer">
                    <img  className='shareImg' src={URL.createObjectURL(file)} alt="post" />
                    <Cancel className='shareCancelImg' onClick={()=>setFile(null)} />
                </div>
            )}
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                    <MdPermMedia color='tomato' className='shareIcon first'/>
                        <span className='shareOptionText'>Photo or Video</span>
                        <input style={{display:"none"}} type="file" id="file" accept='.png,.jpeg,.jpg,.mp4' onChange={(e)=>{
                            setFile(e.target.files[0])
                        }}/> 
                    </label>
                    <div className="shareOption">
                    <MdLabel color='blue' className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                    <MdLocationOn color='green' className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                    <MdEmojiEmotions color='goldenrod' className='shareIcon'/>
                        <span className='shareOptionText'>Reactions</span>
                    </div>
                </div>
                <button className="shareButton" type='submit'>Share</button>
            </form>
        </div>
    </div>
  )
}
export default Share