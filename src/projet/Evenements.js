import React from 'react';
import './Evenements.css';

export default function Evenements() {
  return (
    <section className="evenements-section">
      <h2 className="titre-section">ÉVÉNEMENTS</h2>
      <div className="events-container">

        <div className="event-card" style={{ backgroundImage: `url('/events/5.JPG')` }}>
          <div className="event-overlay">
            <h3>Hackathon : 15–17/12/2023</h3>
            <p>Participation au Méga Hackathon Panafricain avec des idées innovantes développées en un temps record.</p>
          </div>
        </div>

        <div className="event-card" style={{ backgroundImage: `url('/events/4.JPG')` }}>
          <div className="event-overlay">
            <h3>Journée 8 mars : 09/03/2024</h3>
            <p>Événement dédié aux femmes dans la science et l’entrepreneuriat, avec panels et ateliers enrichissants.</p>
          </div>
        </div>

        <div className="event-card" style={{ backgroundImage: `url('/events/3.JPG')` }}>
          <div className="event-overlay">
            <h3>Compétition – Phase des ligues (29 juin 2024)</h3>
            <p>À UIT Kenitra, Enactus FSBM s’est imposé en tête grâce à l’esprit d’équipe et la foi commune.</p>
          </div>
        </div>

        <div className="event-card" style={{ backgroundImage: `url('/events/2.JPG')` }}>
          <div className="event-overlay">
            <h3>Compétition – Demi finale</h3>
            <p>Nous sommes fiers d’être parmi les 12 meilleures équipes du Maroc. L’histoire continue avec passion et ambition.</p>
          </div>
        </div>

        <div className="event-card" style={{ backgroundImage: `url('/events/1.JPG')` }}>
          <div className="event-overlay">
            <h3>Journée d'intégration / lancement (2024–2025)</h3>
            <p>Présentation du club Enactus FSBM et intégration des nouveaux membres par des jeux et des activités de cohésion. Un moment marquant le début d'une aventure collective.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
