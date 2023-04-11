import { Link } from 'react-router-dom'
import './footer.css'
import Footer1Column, { Footer1Head, Footer1Link, Footer1Mail, Footer1Address, Footer1MailContent, Footer1AddressContent } from './Footer1'
import Footer2, { Footer2Content, Footer2Link } from './Footer2'
import BecameSeller from '../../Media/becameSeller.svg'
import Advertise from '../../Media/advertise.svg'
import Gift from '../../Media/gift.svg'
import Help from '../../Media/help.svg'
import FooterCards from '../../Media/footerCards.svg'

let Footer = () => {

    return (
        <div>
            <div className='hei'></div>
            <div className="footer1Container">
                <div className="footer1">
                    <Footer1Column>
                        <Footer1Head>ABOUT</Footer1Head>
                        <Footer1Link>Contact Us</Footer1Link>
                        <Footer1Link>About Us</Footer1Link>
                        <Footer1Link>Careers</Footer1Link>
                        <Footer1Link>Flipkart Stories</Footer1Link>
                        <Footer1Link>Press</Footer1Link>
                        <Footer1Link>Flipkart Wholesale</Footer1Link>
                        <Footer1Link>Corporate Information</Footer1Link>
                    </Footer1Column>
                    <Footer1Column>
                        <Footer1Head>HELP</Footer1Head>
                        <Footer1Link>Payments</Footer1Link>
                        <Footer1Link>Shipping</Footer1Link>
                        <Footer1Link>Cancellation & Returns</Footer1Link>
                        <Footer1Link>FAQ</Footer1Link>
                        <Footer1Link>Report infringement</Footer1Link>
                    </Footer1Column>
                    <Footer1Column>
                        <Footer1Head>CONSUMER POLICY</Footer1Head>
                        <Footer1Link>Return Policy</Footer1Link>
                        <Footer1Link>Terms Of Use</Footer1Link>
                        <Footer1Link>Security</Footer1Link>
                        <Footer1Link>Privacy</Footer1Link>
                        <Footer1Link>Sitemap</Footer1Link>
                        <Footer1Link>Grievance Redressal</Footer1Link>
                        <Footer1Link>EPR Compliance</Footer1Link>
                    </Footer1Column>
                    <Footer1Column>
                        <Footer1Head>SOCIAL</Footer1Head>
                        <Footer1Link>Facebook</Footer1Link>
                        <Footer1Link>Twitter</Footer1Link>
                        <Footer1Link>YouTube</Footer1Link>
                    </Footer1Column>
                    <Footer1Column>
                        <Footer1Mail>
                            <Footer1Head>Mail Us:</Footer1Head>
                            <Footer1MailContent>
                                <p>Flipkart Internet Private Limited, </p>
                                <p> Buildings Alyssa, Begonia & </p>
                                <p> Clove Embassy Tech Village, </p>
                                <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                                <p> Bengaluru, 560103, </p>
                                <p> Karnataka, India</p>
                            </Footer1MailContent>
                        </Footer1Mail>
                    </Footer1Column>
                    <Footer1Column>
                        <Footer1Address>
                            <Footer1Head>Registered Office Address:</Footer1Head>
                            <Footer1AddressContent>
                                <p>Flipkart Internet Private Limited, </p>
                                <p> Buildings Alyssa, Begonia & </p>
                                <p> Clove Embassy Tech Village, </p>
                                <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                                <p> Bengaluru, 560103, </p>
                                <p> Karnataka, India </p>
                                <p> CIN : U51109KA2012PTC066107 </p>
                                <p> Telephone: <Link className='blueLink'>044-45614700</Link></p>
                            </Footer1AddressContent>
                        </Footer1Address>
                    </Footer1Column>
                </div>
                <Footer2>
                    <Footer2Content>
                        <img src={BecameSeller} alt="BecameSeller" />
                        <Footer2Link>Become a Seller</Footer2Link>
                    </Footer2Content>
                    <Footer2Content>
                        <img src={Advertise} alt="Advertise" />
                        <Footer2Link>Advertise</Footer2Link>
                    </Footer2Content>
                    <Footer2Content>
                        <img src={Gift} alt="Gift" />
                        <Footer2Link>Gift Cards</Footer2Link>
                    </Footer2Content>
                    <Footer2Content>
                        <img src={Help} alt="Help" />
                        <Footer2Link>Help Center</Footer2Link>
                    </Footer2Content>
                    <span className='footer2Span'>© 2007-2023 <span> Flipkart.com </span></span>
                    <img src={FooterCards} alt="FooterCards" />
                </Footer2>
            </div>
        </div>
    )
}

export default Footer