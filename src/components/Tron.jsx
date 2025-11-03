import '../styles/Tron.css'
import icon1 from '../assets/icon/orang-lgberdua.png'

function Tron() {
    return (
        <div>
            <div className='tron-kedua'>
                <div className='tron-2'>
                    <img src={icon1} alt="icon" />
                </div>
                <div className='tron-content2'>
                    <h1>The unseen of spending three <br /> at Pixelgrade</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                        Excepturi dolorem reiciendis assumenda quo soluta nisi hic<br />
                        ipsam quisquam minima placeat expedita quod accusantium iusto<br />
                        explicabo architecto sit error, eos rerum.
                    </p>
                    <button className="btn-register2">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Tron
