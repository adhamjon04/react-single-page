import './footer.css';

import  Bannertwo from '../assect/img/banner2.png';
import Copiy from '../assect/img/cop.jpg';

function Footer() {

    return(
        <footer className='footer'>
            <img className='banner-img' src={Bannertwo} alt="Banner" />
            <img className='copiy' src={Copiy} alt="Cop" />
            <ul className='footer-list'>
                <li className='footer-item'>
                    <p className='footer-title'>Free Multipurpose Responsive</p>
                    <p className='footer-text'>Landing Page 2019</p>
                </li>
                <li className='footer-item-two'>
                    <p className='footer-call'>Call Now</p>
                    <p className='footer-number'>(+1)1234567890</p>
                </li>
            </ul>
            <p className='footer-link'>© 2019 All Rights Reserved. Free html Templates</p>


            
        </footer>
    )
    
}
export default Footer;