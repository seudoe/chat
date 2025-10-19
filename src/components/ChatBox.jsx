import './ChatBox.css'
import MsgBox from "./MsgBox"
import MsgInput from "./MsgInput"


export default function ChatBox({msgs}){
    return (
        <div className="chat-box">
            {msgs.map((msg, i) =>{
                return <MsgBox msg={msg} key={i} />
            })}

            <MsgInput />

        </div>
    )
}