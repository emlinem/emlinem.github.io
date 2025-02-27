import React from 'react';
import './contact.css';
import Typography from '../components/Typography'; // Assuming you have a Typography component

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Left Side: Email Contact */}
                <div className="contact-info">
                    <div className="icon">📧</div>
                    <Typography type="h2" color="primary">
                        For commissions and project inquiries, please email:
                    </Typography>
                    <a href="mailto:hello@junedigann.com" className="contact-email">
                        hello@junedigann.com
                    </a>
                    <Typography type="p2" color="secondary">
                        or Send a message via this form
                    </Typography>
                </div>

                {/* Right Side: Contact Form */}
                <div className="contact-form">
                    <Typography type="h2" color="primary">Contact</Typography>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" placeholder="First Name" required />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" placeholder="Last Name" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email *</label>
                            <input type="email" placeholder="Email Address" required />
                        </div>

                        <div className="form-group">
                            <label>Write a message</label>
                            <textarea placeholder="Write a message..." required></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
