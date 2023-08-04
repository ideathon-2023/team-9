// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/nav.js';
import Walle from './components/wall';
import CenteredButton from './components/CenteredButton';
import Card from './components/Card';
import image1 from './components/image1.png';
import image2 from './components/image2.png';
import image3 from './components/image3.png';




function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Walle />
      <div className='main'>
        <hr />
        <h1>Lets Take Care Of Your Health..</h1>
        <p>Book your private consultation and speak to a general practice doctor within an hour by phone or secure video!Doctors working full time for Mediclinic Middle East enjoy attractive UAE market-leading salaries, couple with access to an extensive continuing professional development programme.

Doctors interested in conducting research may also be able to undertake their studies within a Mediclinic hospital, subject to approval.</p>
        <CenteredButton />
        <div style={{ display: 'flex' }}>
        <Card className="card"
          imageSrc={image1}
          title="DOCTOR NEAR ME"
          description="Doctor / Hospital / Specialization to match specific consultation needs. Confirmed Online Appointment slots, practice locations, to select from to book appointment for clinic consultation or video consultation."
        />
        <Card className="card"
          imageSrc={image2}
          title="KNOW YOUR DOCTOR"
          description="Request appointments based on slots, date,consultation location. Know your Doctor to book confirmed doctor Appointment effortlessly with clinic details of practice location to engage with patients effortlessly."
        />
        <Card className="card"
          imageSrc={image3}
          title="BOOK CONFIRMED APPOINTMENT"
          description="Avoid endless back and forth communication; empowering with Google verified SMS & dynamic Email notifications. Confirmed Doctor Appointment, clinical procedure scheduling."
        />
      </div>
    
        </div>
        </div>
       
        </div>
  );
}


export default App;
