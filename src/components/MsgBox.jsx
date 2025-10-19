import './MsgBox.css'


export default function MsgBox({msg}){
    let docPresent = msg.document != 0;
    let currentUser = msg.sender === 'user1';
    return (
        <div className="outer-msgbox"
            style={{justifyContent: currentUser ? 'start' : 'end'}}
        >
            <div className="msgbox" style={{
                borderBottomLeftRadius: currentUser ? 0 : 'auto',
                borderBottomRightRadius: currentUser ? 'auto' : 0
            }} >
                <div className="msg-text">
                    {docPresent ? (
                    <div className="doc-div">
                        {msg.document[0]}
                    </div>
                ): ''}
                    <span>
                        {msg.text}
                    </span>
                </div>
                <div className="msg-info">
                    <div className="time">{msg.time}</div>
                    <div className="isSeen">&nbsp;Y </div>
                </div>
            </div>
        </div>
    )
}