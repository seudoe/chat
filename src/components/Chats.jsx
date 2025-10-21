import './Chats.css'
// import { users } from '../utils/connector'
import addF_icon from '../assets/images/plus-icon.svg'

export default function Chats({frends}){
    return (
        <div className="left-cont">
            <ChatsHeader />
            <div className="chats-cont">
                {frends.map((frend, i) => {
                    // frend = users.find( user => user.id===frend )
                    return <Chat frend={frend} key={i} />
                })}
            </div>
        </div>
    )
}

function Chat({frend}){
    return (
        <div className="chat-cont">
            {frend.username}
        </div>
    )
}
function ChatsHeader(){
    let usrnm = 'user1'
    return (
        <header>
            <div className="user-name">
                {usrnm}
            </div>
            <div className="addF-button-div">
                <button className="addF-button">
                    <img src={addF_icon} alt="" className="addF-icon" />
                </button>
            </div>
        </header>
    )
}