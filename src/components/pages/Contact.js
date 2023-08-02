import React from 'react';

export default function Contact() {
  return (
    <div>
      <section className="page-section bg-light" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <h2 className="mt-0">Contact Me!</h2>
                <hr className="divider" />
              </div>

              <form id="contactForm">
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Full name" required />
                  <label htmlFor="name">Full name</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" placeholder="user@email.com" required />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea className="form-control" id="message" placeholder="Leave your message" required> </textarea>
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
