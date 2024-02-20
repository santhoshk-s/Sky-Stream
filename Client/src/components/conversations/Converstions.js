import './conversation.css'

const PF = process.env.REACT_APP_PUBLIC_FOLDER;


const Converstions = () => {
  return (
    <div className='conversation'>
        <img className='conversationImg' src={PF + "person/9.jpeg"} alt="" />
        <span className="conversationName">Santhosh</span>
    </div>
  )
}
 

export default Converstions