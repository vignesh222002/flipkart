import React, { Children, useContext, useState } from "react"

let UserContext = React.createContext(null)

let UserInfo = ({children}) => {
    let [user, setUser] = useState(null)

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

export default UserInfo

export let useUserInfo = () => {
    return useContext(UserContext)
}