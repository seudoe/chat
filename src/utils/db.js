import dayjs from 'dayjs'
import { genChatId, genMsgId, genUserId } from './id_generator'

let one = genUserId();
let two = genUserId();
let three = genUserId();
let four = genUserId();
export const users = [
    {
        id: one,
        username: 'user1',
        password: 'password1',
        frends:[
            two, three, four
        ],
        name: 'UserOne',
    },{
        id: two,
        username: 'user2',
        password: 'password2',
        frends:[
            one, three, four
        ],
        name: 'UserTwo',
    },{
        id: three,
        username: 'user3',
        password: 'password3',
        frends:[
            one, two, four
        ],
        name: 'UserThree',
    },{
        id: four,
        username: 'user4',
        password: 'password4',
        frends:[
            one, two, three
        ],
        name: 'UserFour',
    }
]

export const msgs = [
    {
        // id: genMsgId(chats[0], 0),
        time: dayjs().format('h:mm a'),
        sender: 'user1',
        reciever: 'user2',
        text: 'Hello How are you',
        document: [
            'image.jpg'
        ]
    },{
        // id: genMsgId(chats[0], 1),
        time: dayjs().format('h:mm a'),
        sender: 'user2',
        reciever: 'user1',
        text: 'I am fine',
        document: [
            'text.txt'
        ]
    },{
        // id: genMsgId(chats[0], 2),
        time: dayjs().format('h:mm a'),
        sender: 'user2',
        reciever: 'user1',
        text: 'I am not fine',
        document: []
    },{
        // id: genMsgId(chats[0], 3),
        time: dayjs().format('h:mm a'),
        sender: 'user1',
        reciever: 'user2',
        text: `I am jose moreno but not that one -- I am not that one `,
        document: []
    }
]

// export const chats = [
//     {
//         id : genChatId(users[0], users[1]),
//         chatUsers : [
//             one,
//             two
//         ],
//         msgs : [
//             msgs[0],
//             msgs[1],
//             msgs[2]
//         ]
//     }
// ]
