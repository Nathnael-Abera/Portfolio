import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

import { BsEnvelopeFill } from "react-icons/bs";

import 'aos/dist/aos.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a data-aos="fade-down" data-aos-duration="1500"  href="https://www.linkedin.com/in/nathnael-abera-33a09b220/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a data-aos="fade-down" data-aos-duration="1200" href="https://github.com/Nathnael-Abera" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a data-aos-duration="900" data-aos="fade-down"  data-aos-anchor=".header__socials"  href="mailto:NathnaelAbera44@gmail.com" target="_blank" rel="noreferrer"><BsEnvelopeFill/></a>
    </div>
    )
}

export default HeaderSocials