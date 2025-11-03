import icon1 from '../assets/icon/icon-1.png'
import icon2 from '../assets/icon/icon-2.png'
import icon3 from '../assets/icon/icon-3.png'



function Community() {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <img src={icon1} alt='icon' />
          <h3>Membership<br /> Organisation</h3>
          <p>Our membership management<br />software provides full automations of <br />membership
            renewals and payments</p>
        </div>
        <div className="card">
          <img src={icon2} alt='icon' />
          <h3>National<br /> Association</h3>
          <p>Our membership management<br />software provides full automations of <br />membership
            renewals and payments</p>
        </div>
        <div className="card">
          <img src={icon3} alt='icon' />
          <h3>Club<br /> And Groups </h3>
          <p>Our membership management<br />software provides full automations of <br />membership
            renewals and payments</p>
        </div>
      </div>
    </div>
  )
}

export default Community
