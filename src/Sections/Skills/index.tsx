import React from 'react'
import './styles.scss'
import { useTranslation } from 'react-i18next'
import { Language, Book, Chat, Team, Plant, Rocket } from '../../iconsController'
const Skills: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="Skills">
      <div className="container">
        <h2>{t('skills.title')}</h2>
        <ul className="skills">
          <li>
            <Language />
            <span>{t('skills.skills.lang')}</span>
          </li>
          <li>
            <Book />
            <span>{t('skills.skills.self-taught')}</span>
          </li>
          <li>
            <Chat />
            <span>{t('skills.skills.Communicativeness')}</span>
          </li>
          <li>
            <Team />
            <span>{t('skills.skills.teamwork')}</span>
          </li>
          <li>
            <Plant />
            <span>{t('skills.skills.adaptability')}</span>
          </li>
          <li>
            <Rocket />
            <span>{t('skills.skills.quickLearning')}</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export { Skills }
