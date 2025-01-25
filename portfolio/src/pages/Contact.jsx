import React from 'react';
import '../styles.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <p>Feel free to reach out for collaborations or any questions you might have.</p>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
