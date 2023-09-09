import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Price from './pages/Price/Price'

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/price" element={<Price />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  )
}

export default App
