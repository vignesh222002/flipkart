import { useContext } from "react"
import "../styles.css"
import { DetailProvide } from "./Home"

let Card = (prop) => {
    let res = prop.response
    let {showDetail, setShowDetail} = useContext(DetailProvide)
    // console.log(res)

    let gotoTop = (res) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        setShowDetail(res.imdbID)
        // console.log(showDetail)
    }


    return (
        <div className="card" onClick={() => gotoTop(res)}>
            <img className="cardImage" src={res.Poster} alt={res.Title}></img>
            <div className="cardContent">
                <div className="cardTitle">{res.Title}</div>
                <div className="cardYear">{res.Year}</div>
            </div>
            {/* <div className="cardType">{res.Type}</div> */}

        </div>
    )
}
export default Card