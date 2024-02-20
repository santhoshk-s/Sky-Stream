import './online.css'

const Online = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <ul className='rightbarFriendList'>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={PF+user.profilePicture} className='rightbarProfileImg' alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>{user.username}</span>
          </li>
        </ul>
  )
}
export default Online