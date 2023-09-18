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
import Header from './components/Header/Header'

import './App.css'
import './i18n'

function App() {

  return (
    <div className='app'>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/price" element={<Price />} />
            <Route path="*" element={<Navigate replace to="/home" />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
