import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import { ScrollProvider } from './components/Contexts/ScrollContext'
import Skills from './components/Skills'
import Contact from './components/Contact'
import TrackUser from './components/TrackUser'

function App() {
  return (
    <>
    <ScrollProvider>
      <BrowserRouter>
        <div className={`grad-back`}>
          <Header />
          <TrackUser />
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={ <Landing /> } />
              <Route path='/skills' element={ <Skills /> } />
              <Route path='/contact' element={ <Contact /> } />
            </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ScrollProvider>
    </>
  )
}

export default App
