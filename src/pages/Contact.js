import React from 'react'

const Contact = () => (
  <section className="Contact">
    <div className="Contact-inner">

      <h1 className="animate fadeInUp one">Contact</h1>

      <ul className="Contact-actions animate fadeInUp two">
        <li><i className="fas fa-map-marker-alt"></i> Chicago, Illinois</li>
        <li><a href="mailto:hello@bryanparonto.com"><i className="fa fa-envelope-square">&nbsp;</i> hello@bryanparonto.com</a></li>
        <li><a target="_blank" href="http://twitter.com/@apis_and_ipas"><i className="fab fa-twitter-square"></i> @apis_and_ipas</a></li>
        <li><a target="_blank" href="http://github.com/apisandipas"><i className="fab fa-github-square">&nbsp;</i> @apisandipas</a></li>
      </ul>

    </div>
  </section>
)

export default Contact