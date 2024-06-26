import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
