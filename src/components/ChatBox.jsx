import './ChatBox.css'
import MsgBox from "./MsgBox"
import MsgInput from "./MsgInput"


export default function ChatBox({msgs}){
    console.log(msgs)
    return (
        <div className="chat-box">
            <div className="msgs-box">
                {msgs.map((msg, i) =>{
                    return <MsgBox msg={msg} key={i} />
                })}
            </div>

            <MsgInput />

        </div>
    )
}