import React, { useEffect } from "react"
import { useState } from "react"

export let UserContext = React.createContext()

let UserInfoContext = ({children}) => {
    let token = localStorage.getItem("token")
    
    let [user, setUser] = useState({
        mobileNumber: null,
        officialNumber: null,
        name: 'Flipkart',
        isLogin: !(!token)
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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE2ODE4OTY4MzZ9.xzdI2cpRZBeYoR6zCEL4BVQkjC6aKWBTG0LO3IxuyqY