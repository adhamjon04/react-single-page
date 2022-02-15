import './contact.css';
import Beimgs from '../assect/img/cac.png'

function Contact() {
    return(
        <section className='section-two'>
            <h1 className='contact-title'>Request a call back</h1>
            <p className='contact-text'>
                A reader will be distracted by the readable content of a page when looking at its layout.
                The point of using LoremIt is a long established fact that a reader will be distracted 
                by the readable content
            </p>

            <div className='flex'>
               

                <form className='contact-form' action="">
                    <input className='size' type="text"  placeholder='Name'/>
                    <input className='size' type="tel" placeholder='Phone Number'/>
                    <input className='size' type="email" placeholder='Email'/>
                    <input className='size' type="text" placeholder='Message'/>
                    <button className='send-btn'>Send</button>


                   
                </form>
                  <img className='img-size' src={Beimgs} alt="Uzuklar" />

            </div>
           

        </section>
    )
    
}

export default Contact;