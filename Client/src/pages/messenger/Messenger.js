import Converstions from '../../components/conversations/Converstions'
import Message from '../../components/message/Message'
import Topbar from '../../components/topbar/Topbar'
import './messenger.css'

const Messenger = () => {
  return (
  <>
    <Topbar />
    <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input type="text" placeholder='search for friends' className='chatMenuInputs' />
            <Converstions />
            <Converstions />
            <Converstions />
            <Converstions />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message />
              <Message />
            </div>
            <div className="chatBoxBottom"></div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            online
          </div>
        </div>
    </div>
  </>
  )
}
export default Messenger
