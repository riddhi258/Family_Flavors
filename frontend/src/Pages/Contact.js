import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <span className="label">Address:</span>
          <span className="value">1234 Street Name, Building Number, City, State, Zip Code</span>
        </div>
        <div className="contact-item">
          <span className="label">Email:</span>
          <span className="value">email@example.com</span>
        </div>
        <div className="contact-item">
          <span className="label">Phone:</span>
          <span className="value">+1-234-567-8900</span>
        </div>
        <div className="contact-item">
          <span className="label">Hours:</span>
          <span className="value">Mon - Sun: 9:00 AM - 5:00 PM</span>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Full Name" name="fullname" required />
        <input type="email" placeholder="Email ID" name="email" required />
        <input type="tel" placeholder="Mobile Number" name="phone" required />
        <textarea placeholder="Message" name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        .contact-container {
          width: 80%;
          margin: 0 auto;
          padding: 20px;
          background: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          font-size: 2em;
          margin-bottom: 20px;
        }

        .contact-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .contact-item {
          flex-basis: 48%;
          display: flex;
          align-items: center;
        }

        .label {
          font-weight: bold;
          margin-right: 10px;
        }

        .value {
          flex-grow: 1;
        }

        .contact-form {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .contact-form input,
        .contact-form textarea {
          flex-basis: 48%;
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .contact-form button {
          flex-basis: 100%;
          padding: 10px;
          border: none;
          background: #333;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }

        .contact-form button:hover {
          background: #555;
        }

        @media (max-width: 768px) {
          .contact-info {
            flex-direction: column;
          }

          .contact-info div {
            margin-bottom: 10px;
          }

          .contact-form input,
          .contact-form textarea {
            flex-basis: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
