import icon1 from '../assets/icon/icon-4.png'
import icon2 from '../assets/icon/icon-5.png'
import icon3 from '../assets/icon/icon-6.png'
import icon4 from '../assets/icon/icon-7.png'



function Testimonial() {
    return (
        <div>
            <div className='stats'>
                <div className='stat-item'>
                    <img src={icon1} alt="icon" />
                    <div className='stat-text'>
                        <span className='stat-number'>2,245,341</span>
                        <span className='stat-label'>Members</span>
                    </div>
                </div>
                <div className='stat-item'>
                    <img src={icon2} alt="icon" />
                    <div className='stat-text'>
                        <span className='stat-number'>46,328</span>
                        <span className='stat-label'>Clubs</span>
                    </div>
                </div>
                <div className='stat-item'>
                    <img src={icon3} alt="icon" />
                    <div className='stat-text'>
                        <span className='stat-number'>828,867</span>
                        <span className='stat-label'>Event Bookings</span>
                    </div>
                </div>
                <div className='stat-item'>
                    <img src={icon4} alt="icon" />
                    <div className='stat-text'>
                        <span className='stat-number'>1,926,436</span>
                        <span className='stat-label'>Payments</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonial
