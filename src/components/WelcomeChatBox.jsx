import './Chatbox.css'

import MsgBox from './MsgBox';
import MsgInput from './MsgInput';

export default function WelcomeChatBox(){
    // console.log(msgs)
    return (
        <div className="right-cont" style={{
            opacity: 0.7, 
            position: 'relative', 
            filter: 'blur(2px)',
            overflow:'hidden'
        }}>
            <div className="overlay" style={{
                position: 'absolute',
                textAlign: 'center',    
                top: '50%', right: '50%',
                transform: 'translate(50%, -50%)',
                fontSize: '50px',
                color: 'var(--text-primary)',
                textShadow: '0 0 20px var(--glow-primary), 0 0 40px var(--glow-secondary)',
                zIndex: 10,
            }}>
                Welcome to <br /> 
                <span style={{
                    fontSize: '200px',
                    background: 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 15px var(--glow-primary))'
                }}>Chatter</span>
            </div>
            <ChatHeader />
            <div className="chat-box">
                {/* <MsgBox  /> */}
            </div>
            <MsgInput />
        </div>
    )
}

function ChatHeader(){
    let usrnm = 'user1', frend = 'Frend';
    return (
        <header>
            {usrnm+" + "+frend}
        </header>
    )
}