import './App.scss'
import { About } from './Sections/About'
import { Home } from './Sections/Home'
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
        <Techs />
        <Skills />
      </div>
    </>
  )
}

export default App
