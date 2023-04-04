import "../styles.css"
import Card from "./Card"


let Display = (prop) => {
    let res = prop.response
    // console.log(res.imdbID)

    return (
        res ? (
            <div className="display" >
                {res.map( (res) => <li key={res.imdbID} className="listCards"><Card response={res} /></li>)}
            </div>
        ) : <h1></h1>
    )
}

export default Display