import React from 'react'

import banner from '../../assets/banner.png'

import './styles.scss'

import { GitHub, Whatsapp, LinkedIn } from '../../iconsController'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const { t } = useTranslation()

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
          <div className="buttons">
            <a href="#Project">Ver Projetos</a>
            <a href="#Project">Sobre mim</a>
          </div>
          <div className="social">
            <a href={'https://wa.me/5553999506262?text=' + t('whatsappText')} target="_blank">
              <Whatsapp />
            </a>
            <a href="https://github.com/JaquesBoeno" target="_blank">
              <GitHub />
            </a>
            <a href="https://linkedin.com/in/JaquesBoeno" target="_blank">
              <LinkedIn />
            </a>
          </div>
        </div>
        <img src={banner} alt="" />
      </div>
    </section>
  )
}

export { Home }
