import './login.css'
import {useContext, useRef} from 'react'
import { loginCall } from '../../apicalls'
import { AuthContext } from '../../context/AuthContext'
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const  email = useRef()
    const  password = useRef() 
    const {isFetching,error,user,dispatch}=useContext(AuthContext)

    const handleClick = (e)=>{ 
        e.preventDefault()
        loginCall({email: email.current.value, password:password.current.value},dispatch)
    }
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Sky Stream</h3>
                <span className="loginDesc">Connect with friends and the world around yo on sky stream.</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick} >
                    <input 
                    placeholder='Email' 
                    required 
                    type="email" 
                    className='loginInput' 
                    ref={email} />
                    <input 
                    placeholder='password' 
                    required 
                    type="password" 
                    minLength={6}
                    className='loginInput' 
                    ref={password}/>
                    <button className='loginBtn' type='submit' disabled={isFetching}>
                        {isFetching ? (<CircularProgress size="25px" color='inherit' />):("log in")}</button> 
                    <span className='loginForgot'>Forgot Password</span>
                    <button className='loginRegBtn'>  {isFetching ? <CircularProgress size="25px" color='inherit' />:"Create a New Account"}</button>
                </form>
            </div>
        </div>
    </div>
  ) 
}
export default Login