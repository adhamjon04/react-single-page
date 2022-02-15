import './header.css'

import Banner from '../assect/img/banner1.png';
import Img from '../assect/img/img.png';
import Logo from  '../assect/img/logo.png';

function Header() {
return(
    <header>
        <img className='header' src={Banner} alt="Banner" width={1500} />
        <img className='crown' src={Img} alt="img" width={600} />
        
        <nav className='nav-list'>
            <img className='logo' src={Logo} alt="Logo" />
            <ul className='header-list'>
                <li className='nav-item, home'>
                    HOME
                </li>
                <li className='nav-item'>
                    JEWELLERY
                </li>
                <li className='nav-item'>
                    CONTACT
                </li>
                <li className='nav-item'>
                    OUR CLIENTS
                </li>
            </ul>
            
            <div className='orient'>
                <h1 className='jewel-bold'>Jewellery</h1>
                <p className='jewel-small'>Free Multipurpose Responsive</p>
                <p className='jewel-solid'>Landing Page 2019</p>
                <button className='jewel-btn'>Contact Us</button>

            </div>
            
        </nav>
     

        
    </header>
)    
}
export default Header;