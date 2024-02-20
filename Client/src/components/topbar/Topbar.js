import './topbar.css'
import { FaSearch,FaUserAlt,FaDiscourse,FaSkype } from 'react-icons/fa';
import { BsChatLeftHeartFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import {Link} from "react-router-dom"
import { useContext } from 'react';
import {AuthContext} from  '../../context/AuthContext'


const Topbar = () => {
    const {user}=useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <Link to="/" style={{textDecoration:'none'}}>
            <span className='logo'>Sky Stream</span>
            </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <FaSearch  className='searchIcon'/>
                <input placeholder='Search Here' 
                className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>TimeLine</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                <FaUserAlt />
                    <span className="topbarIconBadge">1</span>
                </div>
                <Link to="/messenger" style={{color:'white'}}>
                <div className="topbarIconItem">
                <BsChatLeftHeartFill />
                    <span className="topbarIconBadge">2</span>
                </div>
                </Link>
                <div className="topbarIconItem">
                <BsFillBellFill />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <Link to={`/profile/${user.username}`}>
            <img src={ user.profilePicture?   PF + user.profilePicture :PF+"person/noAvatar.png"} alt="" className="topbarImg" />
            </Link>
        </div>
 

    </div>
  )
}
export default Topbar