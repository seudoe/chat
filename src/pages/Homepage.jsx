import './HomePage.css'

import ChatBox from "../components/ChatBox"
import Chats from "../components/Chats"
// import MsgBox from "../components/MsgBox"

import { users } from '../utils/db'

export default function HomePage({msgs}){
    let current_user = users[0];
    return (
        <div className="home-page">
            <Chats frends={current_user.frends} />
            <ChatBox msgs={msgs} />
        </div>
    )
}