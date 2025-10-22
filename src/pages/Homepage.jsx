import './HomePage.css'

import ChatBox from "../components/ChatBox"
import Chats from "../components/Chats"
import { getUserFrends, loginUser } from '../utils/connector';
// import MsgBox from "../components/MsgBox"
// import { useState } from 'react-dom';
import { useContext } from 'react';
import WelcomeChatBox from '../components/WelcomeChatBox';
import AppContext from '../context/AppContext';

import { useNavigate } from 'react-router';

export default function HomePage(){
    // let error = undefined;
    
    const { setCurrentUser, setUserFrends, activeChatState, checked, setChecked } = useContext(AppContext);

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
        setChecked(true)
        const u = JSON.parse(localStorage.getItem('chatterAndSomething99'));
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
                    else setUserFrends(frends);
                })
            }
        });
    }
    if(!checked) checkLocal();
    console.log(JSON.parse(localStorage.getItem('chatterAndSomething99')));
    return (
        <div className="home-page">
            <Chats />
            { activeChatState[0] ? ( <ChatBox /> ): ( <WelcomeChatBox /> )}
        </div>
    )
}