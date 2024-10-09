import React, { useState } from 'react';
import './contact.scss';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_w4fog1m', 
      'template_enc5uhk',
      e.target,
      'z5nfOgwIeE3a3Uv5g'
    ).then((result) => {
      console.log(result.text);
      alert('Message envoyé avec succès !');
    }, (error) => {
      console.log(error.text);
      alert('Erreur lors de l\'envoi du message.');
    });
  
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  

  return (
    <section id="contact" className="contact-section">
      <h2>Me Contacter</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
