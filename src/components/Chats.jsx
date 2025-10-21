import './Chats.css'
// import { users } from '../utils/connector'
import addF_icon from '../assets/images/plus-icon.svg'
import {getChat} from '../utils/connector'

export default function Chats({currentUser, frends, activeChatState, frendState}){

    function Chat({frend}){
        function openChat(){
            frendState[1](frend);
            console.log('frendState[0]: ',frendState[0]);
            console.log('frend',frend)
            getChat({
                userOne: currentUser,
                userTwo: frend
            },(chat, err) => {
                if(err) console.log(err);
                else {
                    if(chat){console.log('chat!=null'); activeChatState[1](chat);}
                    else{ console.log('chat=null || undefined')
                        activeChatState[1]({});
                    }
                }
            })
        }
        return (
            <div onClick={openChat} className="chat-cont">
                {frend.username}
            </div>
        )
    }
    function ChatsHeader(){
        return (
            <header>
                <div className="user-name">
                    {currentUser.username}
                </div>
                <div className="addF-button-div">
                    <button className="addF-button">
                        <img src={addF_icon} alt="" className="addF-icon" />
                    </button>
                </div>
            </header>
        )
    }


    return (
        <div className="left-cont">
            <ChatsHeader />
            <div className="chats-cont">
                {frends.map((frend, i) => {
                    return <Chat frend={frend} key={i} />
                })}
            </div>
        </div>
    )
}
