import React, { useEffect, useState } from 'react'

import './styles.scss'
import brazilFlag from '../../assets/flags/brazil.svg'
import unitedStatesFlag from '../../assets/flags/united-states.svg'
import { useTranslation } from 'react-i18next'

const Select: React.FC = () => {
  const [currentLang, setCurrentLang] = useState('pt-BR')
  const { i18n } = useTranslation()

  const handleLang = () => {
    if (currentLang == 'pt-BR') {
      setCurrentLang('en')
    } else {
      setCurrentLang('pt-BR')
    }
  }
  useEffect(() => {
    i18n.changeLanguage(currentLang)
  }, [currentLang, i18n])

  return (
    <div className={`selectInput`}>
      <div className="selected">
        <button onClick={handleLang}>
          <img src={currentLang == 'pt-BR' ? brazilFlag : unitedStatesFlag} />
        </button>
      </div>
    </div>
  )
}

export { Select }
