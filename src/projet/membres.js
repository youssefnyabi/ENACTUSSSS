import React from 'react';
import './membres.css';

const membresData = [
  { nom: 'Abdelwadoud EL BAROUJI', role: 'Treasurer', image: 'membres/abdelwadoud.png' },
  { nom: 'Younes TAOUMI', role: 'Team Leader', image: 'membres/younes.png' },
  { nom: 'Ammar MASSAOUDI', role: 'Communication Manager', image: 'membres/ammar.png' },
  { nom: 'Basma JAWHAR', role: 'Event Manager', image: 'membres/basma.png' },
  { nom: 'Hind ZAKY', role: 'Human Ressources Manager', image: 'membres/hind.png' },
  { nom: 'Imane OUAZZANI CHAHDI', role: 'Head of partnerships', image: 'membres/imane.png' },
  { nom: 'Maryam BADRI', role: 'Vice Team Leader', image: 'membres/maryam.png' },
  { nom: 'Wiam ABOUTARA BELRHITI', role: 'Vice President Project', image: 'membres/wiam.png' }
];

export default function Membres() {
  return (
    <section className="membres-section" id="membres">
      <h2 className="membres-title">MEMBRES</h2>
      <div className="membres-grid">
        {membresData.map((membre, index) => (
          <div className="membre-card" key={index}>
            <img src={membre.image} alt={membre.nom} className="membre-image" />
            <div className="membre-info">
              <h3 className="membre-name">{membre.nom}</h3>
              <p className="membre-role">{membre.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
