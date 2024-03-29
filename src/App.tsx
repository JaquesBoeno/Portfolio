import './App.scss'
import { About } from './Sections/About'
import { Contact } from './Sections/Contact'
import { Home } from './Sections/Home'
import { Projects } from './Sections/Projects'
import { Skills } from './Sections/Skills'
import { Techs } from './Sections/Techs'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className="PageContent">
        <Home />
        <About />
        <Projects />
        <Techs />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App
