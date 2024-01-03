import './App.scss'
import { About } from './Sections/About'
import { Home } from './Sections/Home'
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
      </div>
    </>
  )
}

export default App
