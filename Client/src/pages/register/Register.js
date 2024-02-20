import { useRef } from 'react'
import './register.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const  username = useRef()
    const  email = useRef()
    const  password = useRef()
    const  passwordAgain = useRef()
    const Navigation = useNavigate()


    const handleClick =async(e)=>{
        e.preventDefault()

        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("passwords don't match")
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try{
                 await axios.post("/auth/register",user)
                 Navigation("/login") 
            }
            catch(err){
                console.log(err) 
            }
        }
    }

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Sky Stream</h3>
                <span className="loginDesc">Connect with friends and the world around your's on sky stream.</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder='Username' required  ref={username} type="text" className='loginInput' />
                    <input placeholder='Email'  required ref={email} type="email" className='loginInput' />
                    <input placeholder='password' minLength={6} required ref={password} type="password" className='loginInput' />
                    <input placeholder='password Again'  required ref={passwordAgain} type="password" className='loginInput' />
                    <button className='loginBtn' type='submit' >Sigh up</button>
                    
                    <button className='loginRegBtn'> Log into Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Register