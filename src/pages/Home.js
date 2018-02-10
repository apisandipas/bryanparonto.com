import React from 'react'
import Button  from '../components/Button'
import bg from '../assets/media/me.jpg'

const Home = () => (
  <div 
    className="Home" 
    style={{
      height: '100%', 
      background: `url(${bg}) center center no-repeat`,
      backgroundSize: 'cover'
    }}>
    <div className="Home-inner">
      <h1 className="animate fadeInUp one">Hi, I'm Bryan & I write code. </h1>
      <h3 className="animate fadeInUp two">Web development, growing a beard, and devouring breakfast sandwiches are my thing.</h3>  
    
      <div className="Home-actions animate fadeInUp three">
        <Button to="/about" text="Learn More" />
        <Button to="/projects" text="See My Work" />
        <a href="/assets/media/BryanParonto-Resume.pdf"  className="Button">Download Resume</a>
      </div>
    </div>
  </div>
)

export default Home