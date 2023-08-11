// src/App.js
import React from 'react';
import './App.css';




import FooterSitemapLinks from "./components/footer";
import Navbar from "./components/nav";
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Book from './pages/book';
import Doctor from './pages/doctor';
import Home from './pages/home';
import Hospital from './pages/hospital';
import Login from './pages/login';
import Register from './pages/register';
import Contact from './pages/contact';




function App() {
  return (
    <div className="App">
      <Router>
            <Navbar />
            <Routes>
                <Route exact path='/home' exact element={<Home />} />
                <Route path='/book' element={<Book />} />
                <Route path='/doctor' element={<Doctor />} />
                <Route path='/hospital' element={<Hospital />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </Router>
        < FooterSitemapLinks />
      
        </div>
  );
}


export default App;
