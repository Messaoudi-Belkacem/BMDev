import { Navbar } from './components'
import {Footer, Hero} from './conatiners'
import {Skills} from './conatiners'
import {Work} from './conatiners'
import './main.css'

function App() {
  return(
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Work/>
      <Footer/>
    </>
  )
}

export default App
