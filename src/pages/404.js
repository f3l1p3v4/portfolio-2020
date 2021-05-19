import React from "react"
import { Link } from "gatsby"

import "../components/styles/main.scss"

const Error = () => (
  <section className="error">
    <div className="error-content">
      <h1>error_404</h1>
      <p className="error-description">Sorry, the page you are looking for </p>
      <p className="error-description">could not be found :(</p>
      <p className="error-link">
        <Link to="/">go to the front page →</Link>
      </p>
    </div>
  </section>
)

export default Error
