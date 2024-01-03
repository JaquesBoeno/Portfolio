import React from 'react'
import { HiOutlineLanguage } from 'react-icons/hi2'
import { GrChat } from 'react-icons/gr'
import { RiTeamLine } from 'react-icons/ri'
import { FiBook } from 'react-icons/fi'
import { PiPlant } from 'react-icons/pi'
import { IoRocketOutline } from 'react-icons/io5'
import './styles.scss'
import { useTranslation } from 'react-i18next'

const Skills: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="Skills">
      <div className="container">
        <h2>{t('skills.title')}</h2>
        <ul className="skills">
          <li>
            <HiOutlineLanguage />
            <span>{t('skills.skills.lang')}</span>
          </li>
          <li>
            <FiBook />
            <span>{t('skills.skills.self-taught')}</span>
          </li>
          <li>
            <GrChat />
            <span>{t('skills.skills.Communicativeness')}</span>
          </li>
          <li>
            <RiTeamLine />
            <span>{t('skills.skills.teamwork')}</span>
          </li>
          <li>
            <PiPlant />
            <span>{t('skills.skills.adaptability')}</span>
          </li>
          <li>
            <IoRocketOutline />
            <span>{t('skills.skills.quickLearning')}</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export { Skills }
