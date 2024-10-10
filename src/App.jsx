import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ScrollProvider } from './components/Contexts/ScrollContext'
import TrackUser from './components/TrackUser'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <>
    <ScrollProvider>
      <BrowserRouter>
        <div className={`grad-back`}>
          <Header />
          <TrackUser />
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </ScrollProvider>
    </>
  )
}

export default App
