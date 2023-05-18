import axios from "axios";
import { IP, Port } from "../IP Address/IPAddress";
import { updateData } from "../state/sector/Sector";

export function getSegment(id, dispatch) {
    axios.get(`http://${IP}:${Port}/getSegment/${id}`)
        .then((res) => {
            // console.log("res is ",res.data)
            dispatch(updateData(Object.entries(res.data[Object.keys(res.data)[0]])))
        }).catch(err=>console.log(err))
}