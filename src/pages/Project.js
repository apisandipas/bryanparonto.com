import React, { Component, Fragment } from 'react'
import Overdrive from 'react-overdrive'
import Button from '../components/Button'
import Footer from '../components/Footer'
import projects from '../projects.json'

import nerdpress from '../assets/media/big/nerdpress-big.png'
import hackthehits from '../assets/media/big/hack-the-hits-big.png'
import earnyourname  from '../assets/media/big/earnyourname-big.png'
import freethink  from '../assets/media/big/freethink-big.png'
import ajcap  from '../assets/media/big/ajcpt-big.png'
import cima  from '../assets/media/big/cima-big.png'
import spendout  from '../assets/media/big/spendout-big.png'
import zap2it  from '../assets/media/big/zap2it-big.png'

const imgs = {
  'nerdpress': nerdpress,
  'hack-the-hits': hackthehits,
  'earn-your-name': earnyourname,
  'freethink': freethink,
  'aj-capital': ajcap,
  'chicago-ima': cima,
  'spendout': spendout,
  'zap2it': zap2it,
}


class Project extends Component {

  renderTechnologies (technologies) {
    const techList = technologies.map(tech => {
      return (
        <span className="tag" key={tech}>{tech}</span>
      )
    })

    return (
      <div className="technologies">
        Technologies:&nbsp;&nbsp;{techList}
      </div>
    )
  }

  render () {
    const { slug } = this.props.match.params
    const project = projects[slug]
    const {
      name,
      agency,
      description,
      longDescription,
      url,
      displayUrl,
      technologies
    } = project
  
    return(
      <Overdrive id={slug}>
      <section className="SingleProject" >
        <div className="container">
          <div className="row">
         
            <h2 className="SingleProject-header" >{name}</h2>
            <div className="SingleProject-actions" >
              <Button to="/projects" className="Button--light" text="Back" />
            </div>

            <div className="col-xs-6">
              <img src={imgs[slug]} alt="" style={{width: '100%'}}/>
            </div>

            <div className="col-xs-6">
              {
                !longDescription && description 
                ? (<p className="description">{description}</p>)
                : (<p className="description" dangerouslySetInnerHTML={{__html: longDescription}}></p>)
              }
              Agency: {agency} 
              {
                url && displayUrl 
                  && (<p className="link">Link: <a href={url}>{displayUrl}</a></p>)
              }
              {technologies && this.renderTechnologies(technologies)}
            </div>


        
          </div>
        </div>

        <div className="clearfix"></div>
        <Footer />
      </section>
      </Overdrive>
    )
  }
} 

export default Project