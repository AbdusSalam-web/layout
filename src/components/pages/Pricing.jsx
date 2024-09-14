import React from 'react'
import './Pricing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
const Pricing = () => {
  return (
      <>
          <div className="pricing">
              <div className="container">
                  <p>
                      <FontAwesomeIcon icon={faMoneyCheckDollar}/>
                      This is the pricing page.
                  </p>
              </div>
      </div>
      </>
  )
}

export default Pricing