import React from 'react'

import './styles.scss'
import { useTranslation } from 'react-i18next'

import docker from '../../assets/techs/docker.svg'
import go from '../../assets/techs/go.svg'
import javascript from '../../assets/techs/javascript.svg'
import next from '../../assets/techs/next.svg'
import node from '../../assets/techs/node.svg'
import postreges from '../../assets/techs/postgres.svg'
import react from '../../assets/techs/react.svg'
import sass from '../../assets/techs/sass.svg'
import typescript from '../../assets/techs/typescript.svg'

const Techs: React.FC = () => {
  const { t } = useTranslation()
  return (
    <section id="Techs">
      <div className="container">
        <h2>{t('techs.title')}</h2>
        <div className="techs">
          <div className="tech">
            <img src={react} />
            <span>React</span>
          </div>
          <div className="tech">
            <img src={next} />
            <span>Next</span>
          </div>
          <div className="tech">
            <img src={javascript} />
            <span>JavaScript</span>
          </div>
          <div className="tech">
            <img src={typescript} />
            <span>TypeScript</span>
          </div>
          <div className="tech">
            <img src={sass} />
            <span>Sass</span>
          </div>
          <div className="tech">
            <img src={go} />
            <span>GoLang</span>
          </div>
          <div className="tech">
            <img src={node} />
            <span>NodeJS</span>
          </div>
          <div className="tech">
            <img src={docker} />
            <span>Docker</span>
          </div>
          <div className="tech">
            <img src={postreges} />
            <span>Postgres</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Techs }
