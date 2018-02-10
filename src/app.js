import React, { Fragment } from 'react'
import { render } from 'react-dom'
import Helmet from 'react-helmet'
import { 
  HashRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'


import Sidebar from './components/Sidebar'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Contact from './pages/Contact'

import './assets/scss/app.scss';

const App = () => (
  <Router> 
    <Fragment>
      <Helmet>
        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
        <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:200,400,700' rel='stylesheet' type='text/css' />
      </Helmet>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects/:slug" component={Project}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Fragment>
  </Router>
)

render(<App/>, document.getElementById('app'))

