import React from 'react'

import banner from '../../assets/banner.png'

import './styles.scss'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Home: React.FC = () => {
  return (
    <section id="Home">
      <div className="container">
        <div className="leftBox">
          <div>
            <h3>HELLO WORLD!</h3>
            <h1>
              I'm a <br />
              web developer <br />
              Jaques Boeno
            </h1>
          </div>
          <div className="social">
            <a href="" target="_blank">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/JaquesBoeno" target="_blank">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/JaquesBoeno" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <img src={banner} alt="" />
      </div>
    </section>
  )
}

export { Home }
