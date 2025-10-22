import { Children, useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider({children}){
    const [currentUser, setCurrentUser] = useState({});
    const [currentUserfrends, setUserFrends] = useState([]);
    const activeChatState = useState(undefined)
    const frendState = useState(undefined)
    const [ checked, setChecked ] = useState(false)
    const value = {
        currentUser, setCurrentUser,
        currentUserfrends, setUserFrends,
        activeChatState,
        frendState,
        checked, setChecked
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}