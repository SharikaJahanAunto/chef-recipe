import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>
          <i className="fas fa-envelope"></i> Email: <a href="mailto:BDFood456@gmail.com">BDFood456@gmail.com</a>
        </p>
        <p>
          <i className="fas fa-phone"></i> Phone: <a href="tel:123-456-7890">123-456-7890</a>
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i> Address: Bashundhora-main branch, Dhaka, Bangladesh
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
