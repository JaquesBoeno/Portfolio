import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import './styles.scss'
import { Select } from '../Select'
import { useTranslation } from 'react-i18next'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header>
      <div className="container">
        <div>LOGO</div>
        <nav>
          <ul>
            <li>
              <a href="#Home">{t('header.home')}</a>
            </li>
            <li>
              <a href="#About">{t('header.about')}</a>
            </li>
            <li>
              <a href="#Projects">{t('header.projects')}</a>
            </li>
            <li>
              <a href="#Techs">{t('header.techs')}</a>
            </li>
            <li>
              <a href="#Skills">{t('header.skills')}</a>
            </li>
            <li>
              <a href="#Contact">{t('header.contact')}</a>
            </li>
            <li>
              <Select />
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
