import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import "../styles.css"
import Display from "./Display"
import ShowDetails from "./ShowDetails"

export let DetailProvide = React.createContext();

let Home = () => {
    let [movieName, setMovieName] = useState("")
    let [searchRespose, setSearchResponse] = useState()
    let [showDetail, setShowDetail] = useState(null) 
    let [detailResponse, setDetailResponse] = useState()  

    useEffect( () => {
        axios.get(`https://www.omdbapi.com/?s=${movieName}&apikey=bd905685`)
        .then((res) => {
            console.log('response fetched')
            setSearchResponse(res.data.Search)
        })
        .catch(err => {
            console.log(err);
        },[movieName])
    },[movieName])

    useEffect( () => {
        axios.get(`https://www.omdbapi.com/?i=${showDetail}&apikey=bd905685`)
        .then( res => {
            setDetailResponse(res.data)
            // console.log(`details`, res)
        })
        .catch(err => {
            console.log(err);
        })
    },[showDetail])

    return (
        <>
            <div className="inputForm">
                <h1 className="enter">Search Movie Name</h1>
                <input type="text" value={movieName} className="searchBar" onChange={e => setMovieName(e.target.value)}></input>
            </div>
            <DetailProvide.Provider value={{showDetail, setShowDetail, detailResponse}}>
                <ShowDetails />
                <div className="body">
                    <Display response={searchRespose} />
                </div>
            </DetailProvide.Provider>
        </>
    )
}

export default Home