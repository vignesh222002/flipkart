import React, { useEffect } from "react"
import { useState } from "react"

export let UserContext = React.createContext()

let UserInfoContext = ({children}) => {
    
    let [user, setUser] = useState({
        mobileNumber: null,
        officialNumber: null,
        name: 'Flipkart',
        isLogin: !(!localStorage.getItem("token"))
    })

    let login = (user) => {
        setUser(user)
    }

    return (
        <UserContext.Provider value={ { user, login } }>
            {children}
        </UserContext.Provider>
    )
}

export default UserInfoContext