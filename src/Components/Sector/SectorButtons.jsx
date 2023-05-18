import { useState } from "react"
import { Link } from "react-router-dom"


export function SectorButton({ id, children }) {
    const [arrowActive, setArrowActive] = useState(false)
    const buttonStyle = arrowActive ? {
        color: "#2874f0"
    } : {}
    const arrowStyle = arrowActive ? {
        marginLeft: "8px",
        transform: "rotate(90deg)"
    } : {
        marginLeft: "8px",
        transform: "rotate(270deg)"
    }

    function handleHover() {
        setArrowActive(true)
    }
    function handleDidHover() {
        setArrowActive(false)
    }

    return (
        <span className="sectorButtonContainer" style={buttonStyle} onMouseOver={() => handleHover()} onMouseLeave={() => handleDidHover()}>
            {children}
            <svg style={arrowStyle} width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="_2JzwqO"></path></svg>
        </span>
    )
}

export function SectorLink({ children }) {
    const [arrowActive, setArrowActive] = useState(false)
    const buttonStyle = arrowActive ? {
        color: "#2874f0"
    } : {}

    function handleHover() {
        setArrowActive(true)
    }
    function handleDidHover() {
        setArrowActive(false)
    }

    return (
        <Link className="sectorButtonContainer" style={buttonStyle} onMouseOver={() => handleHover()} onMouseLeave={() => handleDidHover()}>
            {children}
        </Link>
    )
}

export function SectorTabelLink({ data }) {
    return <Link className="sectorTabelLink">{data}</Link>
}

export function SectorTabel({ head, data }) {
    return (
        <div className="sectorTabel">
            <Link className="sectorTabelHead">{head}</Link>
            {data.map((res, index) => <SectorTabelLink key={index} data={res} />)}
        </div>
    )
}

export function SectorContent({ data }) {

    return (
        <div className="sectorContent">
            {data.map((data, index) => <SectorTabel key={index} head={data[0]} data={data[1]} />)}
        </div>
    )
}
