import React from 'react'
//Import icons from react-icons
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        {/*Add links to socail media*/}
        <a href='https://www.linkedin.com/in/georgegithuma/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/Gitthuma' target='_blank'><FaGithub /></a>
    </div>

  )
}

export default HeaderSocials