import './HomePage.css'

import ChatBox from "../components/ChatBox"
import Chats from "../components/Chats"
import { getUserFrends, loginUser, sendCheckRequest } from '../utils/connector';
// import MsgBox from "../components/MsgBox"
// import { useState } from 'react-dom';
import { useContext, useEffect, useState } from 'react';
import WelcomeChatBox from '../components/WelcomeChatBox';
import AppContext from '../context/AppContext';

import { useNavigate } from 'react-router';

export default function HomePage(){
    // let error = undefined;
    
    const { currentUser, setCurrentUser, setUserFrends, activeChatState, currentUserfrends, notifications, setNotifications} = useContext(AppContext);

    // useEffect(() => {
    //     loginUser({username: 'user9', password:'password2'}, (user, err) => {
    //         console.log(user)
    //         // console.log(err)
    //         if(!user){
    //             console.log(err); return;
    //         }
    //         else{
    //             setCurrentUser(user);
    //             console.log('currentUser:::::: ', user)
    //             getUserFrends({user: user}, (frends, err) => {
    //                 if(err) console.log(err);
    //                 else setUserFrends(frends);
    //             })
    //         }
    //     });
    // }, [])





    const naviget = useNavigate()
    function checkLocal(){
        // setChecked(true)
        const u = JSON.parse(localStorage.getItem('chatterAndSomething99'));
        if(u)
        loginUser({username: u.username, password:u.password}, (user, err) => {
            console.log(user)
            if(!user){
                console.log(err)
                naviget('/login')
            }
            else{
                setCurrentUser(user);
                console.log('currentUser:::::: ', user)
                getUserFrends({user: user}, (frends, err) => {
                    if(err) console.log(err);
                    else{
                        setUserFrends(frends)
                        // console.log('frends : ',frends)
                        // console.log('currentuserfrends: ', currentUserfrends)
                    };
                })
            }
        });
        else naviget('/login')
    }
    useEffect(() => {
        checkLocal();
        setNotifications(new Map())
    },[]) 

    useEffect(() => {
        console.log('in Homepage.useState:: Sending checck req\ncurrentUser',currentUser,'\nnotifications: ',notifications)
        sendCheckRequest( currentUser.username, notifications, setNotifications)
    }, [currentUser, notifications])

    console.log('local:',JSON.parse(localStorage.getItem('chatterAndSomething99')));
    return (
        <div className="home-page">
            <Chats />
            { activeChatState[0] ? ( <ChatBox /> ): ( <WelcomeChatBox /> )}
        </div>
    )
}