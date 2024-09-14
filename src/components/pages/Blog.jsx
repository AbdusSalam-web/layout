import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Blog.css'
const Blog = () => {
  return (
      <>
          <div className="blog">
              <div className="container">
                  <p>
                      <FontAwesomeIcon icon={faBlog} />
                      This is the blog page.
                    </p>
              </div>
      </div>
      
      </>
  )
}

export default Blog