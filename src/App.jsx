import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// import Consultant from '../src/pages/consultantSection/index'
// import Elearning from '../src/pages/eLearningSection/index'
// import OnlineAddmission from '../src/pages/onlineAdmission/index'
// import Dynamic from '../src/pages/dynamicWebsite/index'
import LandingPage from '../src/pages/Dashboard/index'
import Nav from '../src/components/Nav/index'
function App() {
  
  return (
    <>
    <Nav/>
      <Navbar />
      <Outlet />
    <LandingPage/>
      <Footer />
    </>
  )
}

export default App
