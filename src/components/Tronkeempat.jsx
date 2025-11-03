import icon1 from '../assets/icon/image-9.png'

import logo1 from '../assets/logo/logo-(8).png'
import logo2 from '../assets/logo/logo-(9).png'
import logo3 from '../assets/logo/logo-(10).png'
import logo4 from '../assets/logo/logo-(11).png'
import logo5 from '../assets/logo/logo-(12).png'
import logo6 from '../assets/logo/logo-(13).png'

import '../styles/Tronkeempat.css'

function Tronkeempat() {
    return (
        <div className="tron-keempat">
            <div className="tron-4">
                <img src={icon1} alt="icon" />
            </div>
            <div className='tron-content4'>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus<br />
                    tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida<br />
                    enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie<br />
                    mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse<br />
                    eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,<br />
                    vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum<br />
                    id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <div className='isiteks'>
                    <span className='text1'>The Smith</span>
                    <span className='text2'>British Dragon Boat Racing Association</span>
                    <div className='customers'>
                        <div className='line-logo2'>
                            <img src={logo1} alt='logo' />
                            <img src={logo2} alt='logo' />
                            <img src={logo3} alt='logo' />
                            <img src={logo4} alt='logo' />
                            <img src={logo5} alt='logo' />
                            <img src={logo6} alt='logo' />
                        </div>
                        <a href='#' className='meet-customers'>
                            Meet all customers →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tronkeempat
