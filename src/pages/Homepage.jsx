import './HomePage.css'

import ChatBox from "../components/ChatBox"
import Chats from "../components/Chats"
import { getChat, getUserFrends, loginUser } from '../utils/connector';
import MsgBox from "../components/MsgBox"
// import { useState } from 'react-dom';
import { useEffect, useState } from 'react';

export default function HomePage(){
    // let error = undefined;
    const [currentUser, setCurrentUser] = useState({});
    const [currentUserfrends, setUserFrends] = useState([]);
    const [chatOpened, setChatOpened] = useState(undefined)
    useEffect(() => {
        loginUser({username: 'user1', password:'password1'}, (user, err) => {
            console.log(user)
            // console.log(err)
            if(!user){
                console.log(err); return;
            }
            else{
                setCurrentUser(user);
                getUserFrends({user: user}, (frends, err) => {
                    if(err) console.log(err);
                    else setUserFrends(frends);
                    getChat({
                        userOne: user,
                        userTwo: frends[0]
                    },(chat, err) => {
                        if(err) console.log(err);
                        else setChatOpened(chat);
                    })
                })
            }
        });
    }, [])

    return (
        <div className="home-page">
            <Chats frends={currentUserfrends} />
            { chatOpened && ( <ChatBox msgs={chatOpened.msgs} /> )}
        </div>
    )
}