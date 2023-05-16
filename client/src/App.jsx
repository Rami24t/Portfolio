import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, About, Tech, Experience, Works, Feedbacks, Contact, EarthCanvas, BallCanvas, ComputerCanvas, StarsCanvas } from './components';

function App() {
  return (
      <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
        </div>
        <ComputerCanvas />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        </div>
        </div>
      </Router>
      )
}

export default App
