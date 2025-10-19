
export function genUserId(){
    return crypto.randomUUID();
}

export function genChatId(user1, user2){
    return user1.id + "+" + user2.id
}

export function genMsgId(chat, i){
    return chat.id+"="+i
}