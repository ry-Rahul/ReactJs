import React from "react";
import { createContext } from "react";
import UserContext from "./UserContext";

// const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;

// export default function UserContextProvider({ children }) {
//     const [user, setUser] = React.useState(null);

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// }
