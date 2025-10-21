import './MsgBox.css'
import dayjs from 'dayjs'

export default function MsgBox({msg, currentUser}){
    let docPresent = msg.document != 0;
    let isCurrentUser = msg.sender === currentUser.username;
    // console.log('currentUser: ', currentUser.username, '\tmsg.sender: ',msg.sender)
    return (
        <div className="outer-msgbox"
            style={{justifyContent: isCurrentUser ? 'end' : 'start'}}
        >
            <div className="space" style={{
                order: isCurrentUser ? 1 : 2
            }}></div>
            <div className="msgbox" style={{
                order: isCurrentUser ? 2 : 1,
                borderBottomRightRadius: isCurrentUser ? 0 : 'auto',
                borderBottomLeftRadius: isCurrentUser ? 'auto' : 0
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
                    <div className="time">
                        {dayjs(isCurrentUser?msg.time.sent:msg.time.delivery).format('h:mm a') }
                    </div>
                    <div className="isSeen">&nbsp;&nbsp; {msg.status} &nbsp;</div>
                </div>
            </div>
        </div>
    )
}