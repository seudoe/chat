import './MsgInput.css'
import attachIcon from '../assets/images/plus-icon.svg'
import sendIcon from '../assets/images/send-icon.svg'
import { useState } from 'react'
import { sendMsg } from '../utils/connector'
import dayjs from 'dayjs'
import AppContext from '../context/AppContext';
import { useContext } from 'react';


export default function MsgInput(){

    const {currentUser, activeChatState, frendState } = useContext(AppContext);
    const msgInpState = useState('');

    function sendClik(){
        if(msgInpState[0].trim().length === 0) return;
        console.log('frendState: ',frendState);
        console.log('frendState[0]: ',frendState[0]);
        console.log('frendState[0].username: ',frendState[0].username);
        let msg = {
            time:{
                sent: dayjs().toDate(),
                delivery: null,
                seen: null
            },
            sender: currentUser.username,
            text: msgInpState[0],
            document: [],
            status: 'N'
        };
        msgInpState[1]('');
        console.log('sending msg: ',msg);
        sendMsg(msg, frendState[0].username, (chat, err) => {
            if(err) console.log('Error in sendMsg: ',err)
            else activeChatState[1](chat)
        })
    }

    return (
        <div className="chat-inp-container">
            <div className="attach-button-div">
                <button className="attach-button">
                    <img src={attachIcon} alt="" className="attach-icon" />
                </button>
            </div>
            <div className="chat-inp-div">
                <input type="text" className="chat-inp" 
                    onChange={e=>msgInpState[1](e.target.value)} 
                    value={msgInpState[0]}
                    onKeyDown={e=>(e.key === 'Enter')?sendClik():''}
                />
            </div>
            <div className="send-button-div">
                <button className="send-button" onClick={sendClik}>
                    <img src={sendIcon} alt="" className="send-icon" />
                </button>
            </div>
        </div>
    )
}