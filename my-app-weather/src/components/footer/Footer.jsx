import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <span style={{color: 'blue'}}><FontAwesomeIcon icon={faGithub} /></span>
        <span className='medio' style={{color: 'lightgreen'}}><FontAwesomeIcon icon={faWhatsapp} /></span>
        <span style={{color : 'blue'}}><FontAwesomeIcon icon={faFacebook} /></span>
       
    </div>
  )
}

export default Footer