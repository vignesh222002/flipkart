import axios from "axios"
import { updateUserInfo } from "../state/userInformation/UserInformation"
import { IP, Port } from "../IP Address/IPAddress"

export function getUser( dispatch ) {
    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return axios.get(`http://${IP}:${Port}/getProfile`, config)
        .then(res => {
            // console.log(res.data.message)
            dispatch(updateUserInfo(res.data.message))
        })
}