import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import JourneyPlanner from './components/journeyForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <JourneyPlanner />
      <Footer />
    </div>
  )
}

export default App