// import dayjs from 'dayjs'
import axios from 'axios'


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
        func(undefined, 'didntconnect:: ',res)
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