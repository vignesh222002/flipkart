import { SectorButton, SectorContent, SectorLink } from './SectorButtons'
import './sector.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { getSegment } from '../../utils/Sector';



let Sector = () => {
    const [sectorActive, setSectorActive] = useState(false)
    let [selected, setSelected] = useState()
    let sector = useSelector((state) => state.sector)
    let dispatch = useDispatch()

    function selectSector(key) {
        selected != key && setSelected(key)
    }
 
    // useEffect(() => console.log(sector),[sector])
    // useEffect(() => {console.log("sector Active ",sector.sectorActive)},[sector.sectorActive])
    // useEffect(() => console.log("sector Data is " ,sector?.data),[sector.data])

    useEffect(() => {
        if(sector.trigger) getSegment(sector.id, dispatch)
    },[sector.trigger])

    return (
        <div className="sectorContainer">
            <div className="sector">
                <SectorButton select={selected == "1"} selectSector={selectSector} sectorActive={sectorActive} setSectorActive={setSectorActive} id="1" >Electronics</SectorButton>
                <SectorButton select={selected == "2"} selectSector={selectSector} sectorActive={sectorActive} setSectorActive={setSectorActive} id="2" >TVs & Appliances</SectorButton>
                <SectorButton select={selected == "3"} selectSector={selectSector} sectorActive={sectorActive} setSectorActive={setSectorActive} id="3" >Men</SectorButton>
                <SectorButton select={selected == "4"} selectSector={selectSector} sectorActive={sectorActive} setSectorActive={setSectorActive} id="4" >Women</SectorButton>
                <SectorButton select={selected == "5"} selectSector={selectSector} sectorActive={sectorActive} setSectorActive={setSectorActive} id="5" >Baby & Kids</SectorButton>
                <SectorButton select={selected == "6"} selectSector={selectSector} sectorActive={sectorActive} setSectorActive={setSectorActive} id="6" >Home & Furniture</SectorButton>
                <SectorButton select={selected == "7"} selectSector={selectSector} sectorActive={sectorActive} setSectorActive={setSectorActive} id="7" >Sports, Books & More</SectorButton>
                <SectorLink>Flights</SectorLink>
                <SectorLink>Offer Zone</SectorLink>
                <SectorLink>Grocery</SectorLink>
                {sectorActive && <SectorContent setSectorActive={setSectorActive} data={sector?.data} />}
            </div>
        </div>
    )
}

export default Sector