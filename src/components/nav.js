// src/Navbar.js
import React from 'react';



const Navbar = () => {
  return (
    <nav>
      <section className='left'>
      <ul>
   
        <li ><a href="#home">📅 Book Appointment</a></li>
        <li><a href="#services">🙍 Doctors</a></li>
        <li><a href="#doctors">➕ Hospitals & Clinics</a></li>
        <li><a href="#about">♡ Specialities</a></li>
        <li className='right' id='login'><a classname="here" href="#logini">LOGIN</a></li>
        <li className='right' id='register'><a classname="here" href="#register">REGISTER</a></li>
      </ul>
      </section>
    </nav>
  );
};

export default Navbar;
