import React from 'react'

import './styles.scss'
import { FiGithub } from 'react-icons/fi'

import { MdOutlineMailOutline } from 'react-icons/md'
import { FaRegFilePdf } from 'react-icons/fa6'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
const Contact: React.FC = () => {
  return (
    <section id="Contact">
      <div className="container">
        <h2>Contato</h2>
        <ul>
          <li>
            <div>
              <FaWhatsapp /> <span>Whatsapp</span>
            </div>
            <span>+55 (53) 99950-6262</span>
          </li>
          <li>
            <div>
              <MdOutlineMailOutline /> <span>Email</span>
            </div>
            <span>jaquesboeno@proton.me</span>
          </li>
          <li>
            <a href="https://linkedin.com/in/jaquesboeno" target="_blank">
              <div>
                <AiOutlineLinkedin /> <span>LinkedIn</span>
              </div>
              <span>https://linkedin.com/in/jaquesboeno</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/JaquesBoeno" target="_blank">
              <div>
                <FiGithub /> <span>GitHub</span>
              </div>
              <span>https://github.com/JaquesBoeno</span>
            </a>
          </li>
          <li>
            <a href="https://jaquesboeno.dev/curriculo.pdf " target="_blank">
              <div>
                <FaRegFilePdf /> <span>Currículo</span>
              </div>
              <span>https://jaquesboeno.dev/curriculo.pdf </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export { Contact }
