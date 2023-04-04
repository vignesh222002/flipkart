import { useContext } from "react"
import { DetailProvide } from "./Home"
import Image from '../Images/download.png';

let ShowDetails = () => {

    let {showDetail, setShowDetail, detailResponse} = useContext(DetailProvide)
    // console.log(`ShowDetail = ${detailResponse}`);

    return (
        showDetail ? (
            <div className="Detailed">
                <img className="detailImage" src={detailResponse.Poster} />
                <div className="movieDetails">
                    <div className="detailsMovie">Title : <div className="detailContent">{detailResponse.Title}</div></div>
                    <div className="detailsMovie">Year : <div className="detailContent">{detailResponse.Year}</div></div>
                    <div className="detailsMovie">Genre : <div className="detailContent">{detailResponse.Genre}</div></div>
                    <div className="detailsMovie">Language : <div className="detailContent">{detailResponse.Language}</div></div>
                    <div className="detailsMovie">Director : <div className="detailContent">{detailResponse.Director}</div></div>
                    <div className="detailsMovie">Released : <div className="detailContent">{detailResponse.Released}</div></div>
                    <div className="detailsMovie">Runtime : <div className="detailContent">{detailResponse.Runtime}</div></div>
                    <div className="detailsMovie">BoxOffice : <div className="detailContent">{detailResponse.BoxOffice}</div></div>
                    <div className="detailsMovie">imdbRating : <div className="detailContent">{detailResponse.imdbRating}</div></div>
                    <div className="detailsMovie">imdbVotes : <div className="detailContent">{detailResponse.imdbVotes}</div></div>
                    <div className="detailsMovie">Actors : <div className="detailContent">{detailResponse.Actors}</div></div>
                </div>
                <img className="detailClose" src={Image} onClick={() => setShowDetail(null)} />
            </div>
        ) : (
            <></>
        )
    )
}

export default ShowDetails