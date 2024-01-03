import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import './styles.scss'

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div>LOGO</div>
        <nav>
          <ul>
            <li>
              <a href="#Home">Inicio</a>
            </li>
            <li>
              <a href="#About">Sobre</a>
            </li>
            <li>
              <a href="#Projects">Projetos</a>
            </li>
            <li>
              <a href="#techs">Tecnologias</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#Contact">Contato</a>
            </li>
            <li>
              <a href="" target="_blank">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href="https://github.com/JaquesBoeno" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/JaquesBoeno" target="_blank">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { Header }
