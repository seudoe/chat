import './ChatBox.css'
import MsgBox from "./MsgBox"
import MsgInput from "./MsgInput"


export default function ChatBox({msgs}){
    console.log(msgs)
    return (
        <div className="right-cont">
            <ChatHeader />
            <div className="chat-box">
                {msgs.map((msg, i) =>{
                    return <MsgBox msg={msg} key={i} />
                })}
            </div>
            <MsgInput />
        </div>
    )
}

function ChatHeader(){
    let usrnm = 'user1', frend = 'user2';
    return (
        <header>
            {usrnm+" + "+frend}
        </header>
    )
}