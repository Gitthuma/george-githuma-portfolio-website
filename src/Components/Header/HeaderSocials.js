import React from 'react'
//Import icons from react-icons
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
      
    {/*Add links to socail media*/}
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/georgegithuma/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/Gitthuma' target='_blank'><FaGithub /></a>
    </div>

  )
}

export default HeaderSocials