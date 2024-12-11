import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap
import './Styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for any queries or opportunities!</p>
        <form action="#" className="contact-form">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;