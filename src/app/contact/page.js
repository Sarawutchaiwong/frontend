'use client';
import { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className={styles.contactContainer}>
      {/* Animated Background */}
      <div className={styles.animatedBackground}>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          {/* Contact Form Section - Centered */}
          <div className="col-lg-8 col-xl-6">
            <div className={styles.formCard}>
              {!isSubmitted ? (
                <>
                  <div className={styles.formHeader}>
                    <h3>Send us a Message</h3>
                    <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                  </div>

                  <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className={styles.formGroup}>
                          <label htmlFor="name" className={styles.formLabel}>
                            <i className="bi bi-person"></i> Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className={styles.formGroup}>
                          <label htmlFor="email" className={styles.formLabel}>
                            <i className="bi bi-envelope"></i> Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.formLabel}>
                        <i className="bi bi-chat-dots"></i> Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.formLabel}>
                        <i className="bi bi-pencil"></i> Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={styles.formTextarea}
                        rows="5"
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className={`${styles.submitBtn} ${isSubmitting ? styles.loading : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className={styles.spinner}></span>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out to us. We'll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className={styles.newMessageBtn}
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}