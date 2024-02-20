import './message.css'

const PF = process.env.REACT_APP_PUBLIC_FOLDER;


const Message = () => {
  return (
    <div className='message'>
        <div className="messageTop">
            <img className='messageImg' src={PF + "person/8.jpeg"} alt="" />
            <p className='messageTewxt'>this the message</p>
        </div>
        <div className="messageBottom">1 hour ago</div>
        
    </div>
  )
}
export default Message