import React, { Component } from 'react'
import Overdrive from 'react-overdrive'
import { Link } from 'react-router-dom'
import map from 'lodash.map'
import Button from '../components/Button'
import Footer from '../components/Footer'
import projects from '../projects.json'

import nerdpress from '../assets/media/nerdpress.png'
import hackthehits from '../assets/media/hackthehits.png'
import earnyourname  from '../assets/media/earnyourname.png'
import freethink  from '../assets/media/freethink.png'
import ajcap  from '../assets/media/ajcpt.png'
import cima  from '../assets/media/cima.png'
import spendout  from '../assets/media/spendout.png'
import zap2it  from '../assets/media/zap2it.png'

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

class Projects extends Component {
  constructor (props) {
    super(props)

    this.state = {
      projects
    }
  }

  renderProject (project, slug) {
    return (
      <Overdrive id={slug} key={slug}>
        <Link to={`/projects/${slug}`} className="Project">
          <div className="row">
            <div className="col-xs-6">
              
              <img src={imgs[slug]} alt={project.name} />
              
            </div>
            <div className="col-xs-6">
              <h3 className="Project-name">{project.name}</h3>

              <div className="Project-description">{project.description}</div>

              <div className="clearfix"></div>
            </div>
          </div>
        </Link>
      </Overdrive>
    )
  }

  render () {
    return (
      <section className="Projects">
        <div className="container">
          <div className="row">

            <h2 className="Projects-header animate fadeInUp one">Projects</h2>

            <div className="Projects-actions animate fadeInUp two">
              <Button to="/contact" className="Button--light" text="Reach out to me" />
              <a href="/assets/media/BryanParonto-Resume.pdf"  className="Button Button--light">Download Resume</a>
            </div>

            <div className="Projects-list">
              {map(this.state.projects, (project, slug) => {
                return this.renderProject(project, slug);
              })} 
            </div>

          </div>
        </div>
        <Footer />
      </section>
    )
  }
}

export default Projects