import './MsgInput.css'
import attachIcon from '../assets/images/plus-icon.svg'
import sendIcon from '../assets/images/send-icon.svg'

export default function MsgInput(){
    return (
        <div className="chat-inp-container">
            <div className="attach-button-div">
                <button className="attach-button">
                    <img src={attachIcon} alt="" className="attach-icon" />
                </button>
            </div>
            <div className="chat-inp-div">
                <input type="text" className="chat-inp" />
            </div>
            <div className="send-button-div">
                <button className="send-button">
                    <img src={sendIcon} alt="" className="send-icon" />
                </button>
            </div>
        </div>
    )
}