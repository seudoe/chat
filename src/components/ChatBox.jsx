import { useState, useEffect, useRef } from 'react';
import './ChatBox.css'
import MsgBox from "./MsgBox"
import MsgInput from "./MsgInput"


export default function ChatBox({activeChatState, currentUser, frendState}){

    const [msgs, setMsgs] = useState(null);
    const chatBoxRef = useRef(null);

    // ✅ update messages when activeChatState changes
    useEffect(() => {
        if (activeChatState[0]) {
        setMsgs(activeChatState[0].msgs);
        }
    }, [activeChatState[0]]);

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [activeChatState[0]?.msgs]);

    return (
        <div className="right-cont">
            <ChatHeader currentUser={currentUser} frendState={frendState}  />
            <div className="chat-box" ref={chatBoxRef} >
                {activeChatState[0].msgs && activeChatState[0].msgs.map((msg, i) =>{
                    return <MsgBox msg={msg} key={i} currentUser={currentUser} />
                })}
            </div>
            <MsgInput activeChatState={activeChatState} currentUser={currentUser} frendState={frendState}  />
        </div>
    )
}

function ChatHeader({currentUser, frendState}){
    // let usrnm = 'user1', frend = 'user2';
    return (
        <header>
            {currentUser.username+" + "+frendState[0].username}
        </header>
    )
}