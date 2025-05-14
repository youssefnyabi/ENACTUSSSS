import React, { useState } from 'react';
import './rejoindre.css';

export default function Rejoindre() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    motivation: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="formulaire-container">
    <div className="formulaire-content">
      <h2>Rejoindre le Club</h2>
      <form onSubmit={handleSubmit}>
        <input name="nom" placeholder="Nom" onChange={handleChange} required />
        <input name="prenom" placeholder="Prénom" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="motivation" placeholder="Pourquoi souhaitez-vous rejoindre ?" onChange={handleChange} required />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </div>
  
  
  );
}
