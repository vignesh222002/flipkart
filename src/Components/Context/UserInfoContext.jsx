import React from "react"
import { useState } from "react"

export let UserContext = React.createContext()

let UserInfoContext = ({children}) => {
    let [user, setUser] = useState({
        mobileNumber: null,
        officialNumber: null,
        name: 'Flipkart',
        isLogin: true
    })

    let login = (user) => {
        setUser(user)
    }
    let logout = () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={ {user, login, logout} }>
            {children}
        </UserContext.Provider>
    )
}

export default UserInfoContext