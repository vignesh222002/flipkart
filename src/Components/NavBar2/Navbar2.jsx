import './navbar2.css'
import Grocery from '../../Media/grocery.webp'
import Mobiles from '../../Media/mobiles.webp'
import Fashion from '../../Media/fashion.webp'
import Electronics from '../../Media/electronics.webp'
import Home from '../../Media/home.webp'
import Appliances from '../../Media/appliances.webp'
import Travel from '../../Media/travel.webp'
import TopOffers from '../../Media/topOffers.webp'
import BeautyToy from '../../Media/beauty&toy.webp'
import TwoWheeler from '../../Media/twowheeler.webp'
import Navbar2Elements from './Navbar2Element'

let Navbar2 = () => {

    return (
        <div className="navbar2">
            <div className="navbar2Content">
                <Navbar2Elements nav2ProductImage={Grocery} nav2ProductName="Grocery" />
                <Navbar2Elements nav2ProductImage={Mobiles} nav2ProductName="Mobiles" />
                <Navbar2Elements nav2ProductImage={Fashion} nav2ProductName="Fashion" />
                <Navbar2Elements nav2ProductImage={Electronics} nav2ProductName="Electronics" />
                <Navbar2Elements nav2ProductImage={Home} nav2ProductName="Home" />
                <Navbar2Elements nav2ProductImage={Appliances} nav2ProductName="Appliances" />
                <Navbar2Elements nav2ProductImage={Travel} nav2ProductName="Travel" />
                <Navbar2Elements nav2ProductImage={TopOffers} nav2ProductName="Top Offers" />
                <Navbar2Elements nav2ProductImage={BeautyToy} nav2ProductName="Beauty, Toys & More" />
                <Navbar2Elements nav2ProductImage={TwoWheeler} nav2ProductName="Two Wheelers" />
            </div>
        </div>
    )
}

export default Navbar2