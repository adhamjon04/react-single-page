import './jewelery.css';

import Oval from '../assect/img/croo.png';
import Bemimg from '../assect/img/beimg.png'
import Ovaltwo from '../assect/img/croo1.png';

import Beimgtwo from '../assect/img/beimg2.png';

import Beimgthree from '../assect/img/beimg3.png';

function Jewelery() {

    return(
        <section className='section'>
            <p className='circle-one'></p>
            <h1 className='section-text'>
                Best jewellery
            </h1>
            <p className='circle-two'></p>

            <p className='lorem-text'>a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using LoremIt is a long established fact that a reader will
                be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem
                </p>
                <img className='oval-img' src={Oval} alt="Oval" />
                <p className='lorem-text-two'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis sequi voluptate at nisi distinctio ex inventore nam,
                    sapiente, incidunt ad debitis facere voluptatem iusto eligendi quos 
                    assumenda illum blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio laboriosam obcaecati dolorem provident repellat.
                </p>
                <img className='beimg' src={Bemimg} alt="Uzuk" />
                <p className='circle-gold'></p>
                <button className='more-see'>See More</button>
                <img className='oval-two' src={Ovaltwo} alt="" />
                <p className='lorem-text-three'>
                    A reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using LoremIt is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. The point of using Lorem
                </p>
                <img className='beimg-two' src={Beimgtwo} alt="Uzuk-2" />
                <p className='circle-gold-two'></p>
                <button className='more-see-btn'>See More</button>

                <p className='text-four'>
                    A reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using LoremIt is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. The point of using Lorem
                </p>
                <button className='see-more-btn'>See More</button>
                <img className='beimg-three' src={Beimgthree} alt="Uzuk-3" />
                <p className='circle-gold-three'></p>
                
                

        </section>

    )
    
}
export default Jewelery;