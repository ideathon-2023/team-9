import React, { useState } from 'react';
import "./book.css";
import image11 from "./image11.jpg";

const Book = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  
  const specialties = [
    'Cardiology',
    'Dermatology',
    'Gastroenterology',
    'Neurology',
    'Orthopedics',

  ];

  const handleSpecialtyChange = (event) => {
    setSelectedSpecialty(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search functionality here based on the selectedSpecialty
    console.log('Searching for:', selectedSpecialty);
  };

  return (
    <div className='pool'>
  
    <div className='sexy'>
      <h1>Book Medical Appointment</h1>
      <div className='man'><label className="label" htmlFor="specialty">Choose a Medical Specialty:</label></div>
      <select id="specialty" value={selectedSpecialty} onChange={handleSpecialtyChange}>
        <option value="">Select a Specialty</option>
        {specialties.map((specialty, index) => (
          <option key={index} value={specialty}>
            {specialty}
          </option>
        ))}
      </select>
      <button className="search" onClick={handleSearch}>Search</button>
    </div>
    </div>
  );
};

export default Book;

