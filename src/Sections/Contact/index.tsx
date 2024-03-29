import React from 'react'

import './styles.scss'

import { Email, GitHub, LinkedIn, PdfFile, Whatsapp } from '../../iconsController'
import { useTranslation } from 'react-i18next'

const Contact: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="Contact">
      <div className="container">
        <h2>{t('contact.title')}</h2>
        <ul>
          <li>
            <a href={'https://wa.me/5553999506262?text=' + t('whatsappText')} target="_blank">
              <div>
                <Whatsapp /> <span>Whatsapp</span>
              </div>
              <span>+55 (53) 99950-6262</span>
            </a>
          </li>
          <li>
            <a href="mailto:jaquesboeno@proton.me" target="_blank">
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
                <PdfFile /> <span>{t('resume')}</span>
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
