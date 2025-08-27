import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import WorldClock from './components/WorldClock'
import IndianClock from './components/IndianClock'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<WorldClock />} />
            <Route path="/indian-clock" element={<IndianClock />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
