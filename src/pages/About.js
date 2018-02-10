import React from 'react'
import Button from '../components/Button'

import bg from '../assets/media/bigbryan-bg.png'
const About = () => (
  <div 
    className="About"   
    style={{
      height: '100%', 
      background: `url(${bg}) bottom left no-repeat`,
    }}>
    <div className="About-inner row">
      <div className="col-md-6 col-md-push-5">
        <div className="animate fadeInUp one">
          <h2>I’m a front-end-focused web developer who builds modern, responsive web sites and applications</h2>
          <p>I am driven by an insatiable thirst for knowledge, a need to constantly challenge myself, and a desire to produce work that is cleanly coded and focused on usability.</p>
          <p>I spent 3 years at <a href="http://doejo.com/" target="_blank">Doejo</a>, an award-winning Chicago-based digital agency as a web developer working with a variety of brands bigs and small. I played an active part in interviewing new-hires, mentoring junior developers and organized the annual hackathon event.</p>
          <p>After relocating to Portland, Oregon, I spent over a year at <a href="http://theprogrampdx.com" target="_blank">The Program</a> where I built and maintained a few sites for Nike as well a couple of NPOs.</p>
          <p>I’m currently living back in Chicago, Illinois starting my hunt for my next new professional opportunities.</p>
          <p>I’m looking to take on new challenges in a Javascript-centric role on a product team or small agency.</p>
        </div>
        <div className="About-actions animate fadeInUp three">
          <br/>
          <Button to="/projects" text="See My Work" className="Button--light" />
          <a href="/assets/media/BryanParonto-Resume.pdf"  className="Button Button--light">Download Resume</a>
        </div>
      </div>
    </div>
  </div>
)

export default About