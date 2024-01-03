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
            <a
              href="https://wa.me/5553999506262?text=Ol%C3%A1%20Jaques,%20estamos%20impressionados%20com%20suas%20habilidades%20de%20desenvolvimento!%20Gostaria%20de%20discutir%20uma%20oportunidade%20conosco?"
              target="_blank"
            >
              <div>
                <Whatsapp /> <span>Whatsapp</span>
              </div>
              <span>+55 (53) 99950-6262</span>
            </a>
          </li>
          <li>
            <a>
              <div>
                <Email /> <span>Email</span>
              </div>
              <span>jaquesboeno@proton.me</span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/jaquesboeno" target="_blank">
              <div>
                <LinkedIn /> <span>LinkedIn</span>
              </div>
              <span>linkedin.com/in/jaquesboeno</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/JaquesBoeno" target="_blank">
              <div>
                <GitHub /> <span>GitHub</span>
              </div>
              <span>github.com/JaquesBoeno</span>
            </a>
          </li>
          <li>
            <a href="https://jaquesboeno.dev/curriculo.pdf " target="_blank">
              <div>
                <PdfFile /> <span>Currículo</span>
              </div>
              <span>jaquesboeno.dev/curriculo.pdf </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export { Contact }
