// import dayjs from 'dayjs'
import axios from 'axios'
// import { response } from 'express';


export function loginUser({username, password}, func){
    let res;
    axios.post(`/data/${username}`,{
        user:{
            username: username,
            password: password
        }
    })
    .then((response) => {
        res = response.data
        console.log('cnctr:: res:',res)
        
        if(res.status === 0){ 
            func(res.user, undefined);
        }
        else func(undefined, res.msg);
    })
    .catch((err) => {
        func(undefined, 'in.post:Didnt connect to server, error: '+err)
    })
}

export function getUserFrends({user}, func){
    let res;
    axios.put(`/data/${user.username}`, {
        action: 0,
        Body: {
            user : user
        }
    })
    .then(response => {
        res = response.data
        console.log('cnctr:: res:',res);
        if(res.status === 0) {
            // console.log('cnctr:: res.frends: ',res.frends)
            func(res.frends, undefined)
        } else {
            func(undefined,'status!=0 :: '+ res.msg)
        }
    })
    .catch(err => {
        console.log('Error in getUserfrends.catch: ',err)
        func(undefined, 'didntconnect:: '+res)
    })
}

export function getChat({userOne, userTwo},func){
    let res;
    axios.put(`/data/${userOne.username}`, {
        action : 1,
        Body:{
            user1: userOne,
            user2: userTwo
        }
    })
    .then(response => {
        res = response.data
        console.log('cnctr:: res:',res);
        if(res.status === 0){
            func(res.chat,undefined);
        } else {
            func(undefined,'status!=0 :: '+ res)
        }
    })
    .catch(err => {
        console.log('Error in getChat.catch: ',err)
        func(undefined, 'didntconnect: :',res)
    })
}

export function sendMsg(msg, frendUsername, func){
    let res
    console.log('cnctr:: sendMsg. frendUsername: ',frendUsername);
    axios.put(`/data/${msg.sender}`, {
        action : 2,
        Body:{
            msg: msg,
            frendUsername: frendUsername
        }
    })
    .then(response => {
        res = response.data
        console.log('cnctr:: sendMsg. res:',res);
        if(res.status === 0){
            func(res.chat,undefined);
        } else {
            func(undefined,'status!=0 :: '+ res)
        }
    })
    .catch(err => {
        console.log('Error in sendMsg.catch: ',err)
        func(undefined, 'didntconnect: :',res)
    })
}


export function sendCheckRequest(currentUsername, notifications, setNotifications){
    console.log('inConnector:: sending check request \ncurrentusername: ','user1','\nNotifications', notifications)

    let res;
    const tempNotifications = new Map(notifications);
    axios.post(`/chatter/${currentUsername}`,{
        // username: 'user1'
        username: currentUsername
    })
    .then((response) => {
        res = response.data;
        console.log('inConnector.sendCheckReq:got a resp: res.status: ',res.status)
        if(res.status === 0){
            let tempNotifications = new Map(notifications);
            if (tempNotifications.has(res.frend)) {
                console.log(`it has`)
                tempNotifications.set(res.frend, tempNotifications.get(res.frend)+1);
            }
            else tempNotifications.set(res.frend, 1); 
            setNotifications(tempNotifications)
            // setNotifications(() => {
            //     if (tempNotifications.has(res.frend)) tempNotifications.set(res.frend, tempNotifications.get(res.frend)+1);
            //     else tempNotifications.set(res.frend, 1); 
            //     return tempNotifications;
            // });
            console.log(`\x1b[31m]inConnector.sendCheckReq: status: 0 :: notifications`,tempNotifications)
        }
        else setNotifications(tempNotifications)
        setTimeout(() => sendCheckRequest(currentUsername, new Map(tempNotifications),setNotifications), 100);
        // sendCheckRequest(currentUsername, notifications, setNotifications)
    }).catch((err) => {
        console.log('inCnctr.sendCheckReq . catch:: Err: ',err)
        setTimeout(() => sendCheckRequest(currentUsername, new Map(tempNotifications), setNotifications), 3000);
    })
}