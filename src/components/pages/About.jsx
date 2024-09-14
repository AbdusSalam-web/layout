import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './About.css'
const About = () => {
  return (
      <>
          <div className="about">
              <div className="container">
                  <p>
                      <FontAwesomeIcon icon={faAddressBook} />
                      This is the about page.
                  </p>
              </div>
      </div>
      </>
  )
}

export default About