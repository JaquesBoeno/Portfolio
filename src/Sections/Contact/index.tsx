import React from 'react'

import './styles.scss'

import { Email, GitHub, LinkedIn, PdfFile, Whatsapp } from '../../iconsController'

const Contact: React.FC = () => {
  return (
    <section id="Contact">
      <div className="container">
        <h2>Contato</h2>
        <ul>
          <li>
            <div>
              <Whatsapp /> <span>Whatsapp</span>
            </div>
            <span>+55 (53) 99950-6262</span>
          </li>
          <li>
            <div>
              <Email /> <span>Email</span>
            </div>
            <span>jaquesboeno@proton.me</span>
          </li>
          <li>
            <a href="https://linkedin.com/in/jaquesboeno" target="_blank">
              <div>
                <LinkedIn /> <span>LinkedIn</span>
              </div>
              <span>https://linkedin.com/in/jaquesboeno</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/JaquesBoeno" target="_blank">
              <div>
                <GitHub /> <span>GitHub</span>
              </div>
              <span>https://github.com/JaquesBoeno</span>
            </a>
          </li>
          <li>
            <a href="https://jaquesboeno.dev/curriculo.pdf " target="_blank">
              <div>
                <PdfFile /> <span>Currículo</span>
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
