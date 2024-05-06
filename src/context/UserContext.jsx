import { createContext, useState } from "react";

export const UserContext = createContext();

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState();

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}