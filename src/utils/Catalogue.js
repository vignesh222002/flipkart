import axios from "axios"
import { IP, Port } from "../IP Address/IPAddress"

export function getCatalogueProduct(api, setData) {
    axios.get(`http://${IP}:${Port}/getSubcategoryProducts/${api}`)
        .then((res) => {
            // console.log("initial ",res.data[0])
            setData(res.data)
        })
}

export function getCatalogueProductFilter(api, setData, state) {
    axios.get(`http://${IP}:${Port}/es/fassured/getSubcategoryProducts/${api}?val=${state}`)
        .then((res) => {
            // console.log("secondary ",res.data.data[0])
            setData(res.data.data)
        })
}