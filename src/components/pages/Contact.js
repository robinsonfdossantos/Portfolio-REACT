import React from 'react';
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <section className="page-section" id="contact">
        <div className="container-contact">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
              <h2 className="heading">CONTACT ME!</h2>
                <hr className="divider" />
              </div>

              <form className="contact-form" id="contactForm">
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Full name" required />
                  <label htmlFor="name">Full name</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" placeholder="user@email.com" required />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea className="form-control" id="message" placeholder="Leave your message" required rows="6"> </textarea>
                  <label htmlFor="message">Message</label>
                </div>

                <hr className="divider" />

                <div className="d-grid">
                  <button className="btn btn-primary btn-xl" id="submitButton" type="submit">
                    Submit
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
