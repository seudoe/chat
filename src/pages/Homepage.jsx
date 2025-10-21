import './HomePage.css'

import ChatBox from "../components/ChatBox"
import Chats from "../components/Chats"
import { getUserFrends, loginUser } from '../utils/connector';
import MsgBox from "../components/MsgBox"
// import { useState } from 'react-dom';
import { useEffect, useState } from 'react';
import WelcomeChatBox from '../components/WelcomeChatBox';

export default function HomePage(){
    // let error = undefined;
    const [currentUser, setCurrentUser] = useState({});
    const [currentUserfrends, setUserFrends] = useState([]);
    const activeChatState = useState(undefined)
    const frendState = useState(undefined)
    useEffect(() => {
        loginUser({username: 'user2', password:'password2'}, (user, err) => {
            console.log(user)
            // console.log(err)
            if(!user){
                console.log(err); return;
            }
            else{
                setCurrentUser(user);
                console.log('currentUser:::::: ', user)
                getUserFrends({user: user}, (frends, err) => {
                    if(err) console.log(err);
                    else setUserFrends(frends);
                })
            }
        });
    }, [])



    return (
        <div className="home-page">
            <Chats 
                currentUser={currentUser} 
                frends={currentUserfrends} 
                activeChatState={activeChatState} 
                frendState={frendState} 
            />
            { activeChatState[0] ? ( 
                <ChatBox 
                    activeChatState={activeChatState} 
                    currentUser={currentUser} 
                    frendState={frendState} 
                /> 
            ): ( <WelcomeChatBox /> )}
        </div>
    )
}