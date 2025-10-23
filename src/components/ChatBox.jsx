import { useEffect, useRef } from 'react';
import './ChatBox.css'
import MsgBox from "./MsgBox"
import MsgInput from "./MsgInput"
import AppContext from '../context/AppContext';
import { useContext } from 'react';


export default function ChatBox(){

    const {currentUser, activeChatState, frendState } = useContext(AppContext);

    // const [msgs, setMsgs] = useState(null);
    const chatBoxRef = useRef(null);

    // useEffect(() => {  // to update msgs when activeChatState changes
    //     if (activeChatState[0]) {
    //     setMsgs(activeChatState[0].msgs);
    //     }
    // }, [activeChatState[0]]);

    useEffect(() => {  // whenever msgs update scroll to bottom
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [activeChatState[0]?.msgs]);

    return (
        <div className="right-cont">
            <ChatHeader currentUser={currentUser} frendState={frendState}  />
            <div className="chat-box" ref={chatBoxRef} >
                {activeChatState[0].msgs && activeChatState[0].msgs.map((msg, i) =>{
                    return <MsgBox msg={msg} key={i} />
                })}
            </div>
            <MsgInput />
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