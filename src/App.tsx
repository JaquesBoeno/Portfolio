import './App.scss'
import { About } from './Sections/About'
import { Home } from './Sections/Home'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  )
}

export default App
