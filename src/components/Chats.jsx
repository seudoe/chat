import './Chats.css'
// import { users } from '../utils/connector'

export default function Chats({frends}){
    return (
        <div className="chats-cont">
            {frends.map((frend, i) => {
                // frend = users.find( user => user.id===frend )
                return <Chat frend={frend} key={i} />
            })}
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