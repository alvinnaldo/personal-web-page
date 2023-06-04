import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Navbar from './Components/Navbar';
import PortfolioXmart from './Pages/PortfolioXmart';
import Contact from './Pages/Contact';
import PortfolioAttendance from './Pages/PortfolioAttendance';

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/portfolio-xmart' element={<PortfolioXmart />}/>
        <Route path='/portfolio-attendance' element={<PortfolioAttendance />}/>
      </Routes>
    </>
  )
}

export default App
