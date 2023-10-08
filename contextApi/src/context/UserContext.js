import React from "react";
import { createContext } from "react";

//userContext is the provider and it will be used to wrap the components that need access to the context
const UserContext = createContext()

export default UserContext

    /*  
    < UserContext >
    <Login/>
    <Card>
    <data/>
    </Card>
    <App />
    </UserContext >
    */

