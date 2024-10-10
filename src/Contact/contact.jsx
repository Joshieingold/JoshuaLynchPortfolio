import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import "./contact.css";

const Contact = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_y5j0wbj', 'template_q1hdzz9', form.current, {
                publicKey: 'JyD-tguykLBx5RD-s',
            })
            .then(
                () => {
                    setEmailSent(true);
                    setTimeout(() => setEmailSent(false), 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );

        e.target.reset();
    };

    return (
        <div className="contact" id="contact">
            <h2 className="contactHeading">Contact</h2>
            <p className="ContactDescription">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>

            {emailSent && (
                <div className={`emailSuccessMessage ${emailSent ? 'show' : ''}`}>
                    Email sent! Thank you for your inquiry! I will be in touch with you shortly.
                </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="contactForm">

                <input type="text" name="user_name" className="name" placeholder="Name" required />

                <input type="email" name="user_email" className="email" placeholder="Email" required />

                <textarea name="message" className="msg" placeholder="Your message" rows="5" required />
                <input type="submit" value="Submit" className="submitBtn" />
            </form>
        </div>
    );
};

export default Contact;
