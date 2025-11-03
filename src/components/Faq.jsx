import '../styles/Faq.css'

import image1 from '../assets/image/image-18.png'
import image3 from '../assets/image/image-19.png'
import image2 from '../assets/image/image-20.png'


function Faq() {
    return (
        <div className='cards'>
            <div className='card2'>
                <img src={image1} alt="image" />
                <div className='card-box2'>
                    <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
                    <a href="#" className='readmore'>Readmore →</a>
                </div>
            </div>
            <div className='card2'>
                <img src={image2} alt="image" />
                <div className='card-box2'>
                    <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
                    <a href="#" className='readmore'>Readmore →</a>
                </div>
            </div>
            <div className='card2'>
                <img src={image3} alt="image" />
                <div className='card-box2'>
                    <h3>Revamping the Membership Model with Triathlon<br /> Australia</h3>
                    <a href="#" className='readmore'>Readmore →</a>
                </div>
            </div>

        </div>
    )
}

export default Faq

