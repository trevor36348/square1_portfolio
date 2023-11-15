import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js"
import Footer from "./components/MeetHeader.js"
import Home from './pages/home.js';
import Contact from './pages/contact.js';


import "./components/General.css"
import "./components/NavbarCSS.css"
import "./components/Background.css"
import "./components/MeetHeader.css"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes> 
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
