import iconTwitter from './assets/icon-twitter.svg'
import iconLinkedin from './assets/icon-linkedin.svg'
import iconFrontendMentor from './assets/icon-frontend-mentor.svg'
import iconGithub from './assets/icon-github.svg'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <header className='container'>
        <div className="header__grid">
          <h1 className='header-text'>
            adamkeyes
          </h1>

          <div className='header__icons'>  
            <img src={iconGithub} alt="image icon Github" className='header__icons_img'/>
            <img src={iconFrontendMentor} alt="image icon Frontendmentor" className='header__icons_img'/>
            <img src={iconLinkedin} alt="image icon LinkedInd" className='header__icons_img'/>
            <img src={iconTwitter} alt="image icon Twitter" className='header__icons_img'/>
          </div>
        </div>
      </header>

      <Hero />

      <Skills />
      
      <Projects />

      <Contact />
    </>
  )
}

export default App
