import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactCard, faMobile, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return (
      <>
      
          <div className="contact">
              <div className="container">
                  <p>
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      This is the contact page.
                  </p>
              </div>
      </div>
      </>
  )
}

export default Contact