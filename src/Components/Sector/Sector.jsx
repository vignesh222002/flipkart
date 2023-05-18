import { SectorButton, SectorContent, SectorLink } from './SectorButtons'
import './sector.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getSegment } from '../../utils/Sector';



let Sector = () => {
    let sector = useSelector((state) => state.sector)
    let dispatch = useDispatch()
    // useEffect(() => console.log(sector),[sector])
    // useEffect(() => {console.log("sector Active ",sector.sectorActive)},[sector.sectorActive])
    // useEffect(() => console.log("sector Data is " ,sector?.data),[sector.data])

    useEffect(() => {
        if(sector.trigger) getSegment(sector.id, dispatch)
    },[sector.trigger])

    return (
        <div className="sectorContainer">
            <div className="sector">
                <SectorButton id="1" >Electronics</SectorButton>
                <SectorButton id="2" >TVs & Appliances</SectorButton>
                <SectorButton id="3" >Men</SectorButton>
                <SectorButton id="4" >Women</SectorButton>
                <SectorButton id="5" >Baby & Kids</SectorButton>
                <SectorButton id="6" >Home & Furniture</SectorButton>
                <SectorButton id="7" >Sports, Books & More</SectorButton>
                <SectorLink>Flights</SectorLink>
                <SectorLink>Offer Zone</SectorLink>
                <SectorLink>Grocery</SectorLink>
                {sector.sectorActive && <SectorContent data={sector?.data} />}
            </div>
        </div>
    )
}

export default Sector