import React from 'react'

import './styles.scss'
import { useTranslation } from 'react-i18next'

const About: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="About">
      <div className="container">
        <h2>{t('about.title')}</h2>
        <div>
          <img src="https://github.com/JaquesBoeno.png" alt="" />
          <p>{t('about.text')}</p>
        </div>
      </div>
    </section>
  )
}

export { About }
