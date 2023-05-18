import { SectorButton, SectorContent, SectorLink } from './SectorButtons'
import './sector.css'
import obj from './mock.json'

let Sector = () => {
    let value = Object.entries(obj[Object.keys(obj)[0]])

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

                <SectorContent data={value} />
            </div>
        </div>
    )
}

export default Sector