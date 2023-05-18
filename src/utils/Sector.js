import axios from "axios";
import { IP, Port } from "../IP Address/IPAddress";
import { useDispatch } from "react-redux";

function getSegment(id, dispatcher) {
    let dispatch = useDispatch()

    axios.get(`http://${IP}:${Port}/getSegment/${id}`)
        .then((res) => {
            dispatch(dispatcher(   Object.entries(res[Object.keys(res)[0]])   ))
        })
}