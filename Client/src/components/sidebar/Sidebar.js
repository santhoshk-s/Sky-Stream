import './sidebar.css'
import { MdRssFeed,MdSchool } from "react-icons/md";
import { BsCalendarEvent,BsFillBagCheckFill,BsQuestionCircleFill,BsFillChatLeftTextFill,BsPlayCircleFill,BsFillPeopleFill,BsFillBookmarkHeartFill } from "react-icons/bs";
import {Users} from '../../data/data'
import CloseFriend from '../closeFriend/CloseFriend';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <ul className='sidebarList'>
            <li className="sidebarListItem">
              <MdRssFeed className='sidebarIcon'/>
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <BsFillChatLeftTextFill className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <BsPlayCircleFill className='sidebarIcon'/>
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <BsFillPeopleFill className='sidebarIcon'/>
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <BsFillBookmarkHeartFill className='sidebarIcon'/>
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <BsQuestionCircleFill className='sidebarIcon'/>
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <BsFillBagCheckFill className='sidebarIcon'/>
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <BsCalendarEvent className='sidebarIcon'/>
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <MdSchool className='sidebarIcon'/>
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className='sidebarButton'>Show More</button>
          <hr  className='sidebarHr'/>
          <ul className='sidebarFriendList'>
            {Users.map(u=>(
              <CloseFriend  key={u.id} user={u}/>
            ))}
      
          </ul>
        </div>
    </div>
  )
}
export default Sidebar