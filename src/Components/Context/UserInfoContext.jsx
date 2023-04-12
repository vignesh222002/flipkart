import React from "react"
import { useState } from "react"

export let UserContext = React.createContext()

let UserInfoContext = ({children}) => {
    let [user, setUser] = useState(null)

    let login = (user) => {
        setUser(user)
    }
    let logout = () => {
        setUser(null)
    }
    console.log(user)

    return (
        <UserContext.Provider value={ {user, login, logout} }>
            {children}
        </UserContext.Provider>
    )
}

export default UserInfoContext