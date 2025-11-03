import Navbar from "../components/Navbar"
import Service from "../components/Service"
import Community from "../components/Community"
import Tron from "../components/Tron"
import Testimonial from "../components/Testimonial"
import Tronketiga from "../components/Tronketiga"
import Tronkeempat from "../components/Tronkeempat"
import Faq from "../components/Faq"
import Demo from "../components/Demo"
import Footer from "../components/Footer"

import { homeSection } from "../data/HomeSection"
import { serviceSection, serviceList } from "../data/ServiceSection"
import { communitySection } from "../data/CommunitySection"
import { testimonialSection } from "../data/TestimonialSection"
import { faqSection } from "../data/FaqSection"


import icon from '../assets/icon/Illustration.png'
import '../styles/Home.css'
import parse from 'html-react-parser'



function Home() {
  return (
    <div>
      <Navbar />
      {/* home */}
      <section id="home">
        <div className="container-1">
          <div className="tron-content">
            {parse(homeSection.content)}
            <button className="btn-register">Register</button>
          </div>
          <div className="tron-image">
            <img src={icon} alt='icon' />
          </div>
        </div>
      </section>

      {/* service */}
      <section id="service">
        <div className="container-2">
          <div className="home-base">
            {parse(serviceSection.content)}
          </div>
          <div className="service-list">
            <Service serviceList={serviceList} />
          </div>
        </div>
      </section>

      {/* community */}
      <section className="community">
        <div className="community-card">
          {parse(communitySection.content)}
        </div>
        <Community />
      </section>

      {/* tron-2 */}
      <section id="feature">
        <Tron />
      </section>

      {/* testimonial */}
      <section id="testimonial">
        <div className="container">
          <div className="left-text">
            {parse(testimonialSection.content)}
          </div>
          <Testimonial />
        </div>
      </section>
      <section id="product">
        <Tronketiga />
      </section>
      <Tronkeempat />
      {/* faq */}
      <section id="faq">
        <div className="marketing">
          {parse(faqSection.content)}
        </div>
        <Faq />
      </section>
      <Demo />
      <Footer />

    </div>
  )
}

export default Home
