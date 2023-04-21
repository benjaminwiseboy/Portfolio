import Fade from 'react-reveal'
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Profile from './components/Profile/Profile'
import Services from './components/Services/Services'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import './App.css'
import Experience from './components/Experience/Experience'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />

        <Fade bottom>
          <Profile />
          <Services />
          <Projects />
          <Experience />
          <Contact />
        </Fade>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
