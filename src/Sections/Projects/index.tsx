import React from 'react'

import './styles.scss'
import { useTranslation } from 'react-i18next'

const Projects: React.FC = () => {
  const { t } = useTranslation()
  return (
    <section id="Projects">
      <div className="container">
        <h2>{t('projects.title')}</h2>
        <div>Em construção</div>
      </div>
    </section>
  )
}

export { Projects }
