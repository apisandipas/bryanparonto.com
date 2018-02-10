import React, { Component }from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

class Sidebar extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggleSidebar () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  closeSidebar () {
    this.setState({
      isOpen: false
    })
  }

  render () {

    const classes = cx('Sidebar-wrapper', {'Sidebar--active': this.state.isOpen})
    return (
      <div className="Sidebar">
        <a className="Sidebar-toggle Button" onClick={() => this.toggleSidebar()}>
          <i className="fas fa-bars"></i>
        </a>
        <nav className={classes}>
          <ul className="Sidebar-nav">
            <a className="Sidebar-close Button pull-right" onClick={() => this.closeSidebar()}>
              <i className="fas fa-times"></i>
            </a>
            <li className="Sidebar-brand" >
              <Link to="/" onClick={() => this.closeSidebar()}>Bryan Paronto</Link>
            </li>
            <li >
              <Link className="active" to="/" onClick={() => this.closeSidebar()}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => this.closeSidebar()}>About Me</Link>
            </li>
            <li >
              <Link to="/projects" onClick={() => this.closeSidebar()}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => this.closeSidebar()}>Contact Me</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }

}

export default Sidebar