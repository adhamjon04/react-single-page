import './client.css';

import Bakeslash from '../assect/img/icon_1.png';
import Clients from '../assect/img/clients.png';  

function Client() {
    return(
        <section className='section-client'>
            <h1 className='client-title'>Our Clients</h1>
            <p className='client-text'>A reader will be distracted by the readable 
                content of a page when looking at its layout. 
                The point of using LoremIt is a
                </p>
                <ul className='client-list'>
                    <li>
                        <img className='bakslash' src={Bakeslash} alt="" />
                    </li>
                    <li>
                        <img className='person' src={Clients} alt="" />
                
                    </li>
                    <li>
                        <h3 className='person-name'>Joe elik</h3>
                        <p className='person-commit'>
                            It is a long established fact that a reader will be distracted by
                            the readable content of  a page when looking at its layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as

                        </p>
                    </li>

                </ul>

        </section>
    )
    
}
export default Client;