import React from "react";
import "./sousaccueil.css";

const achievements = [
  {
    title: "Top 12 du Maroc",
    image: "/events/1.jpg",
    description: "Nous avons eu l'honneur d'être classés parmi les 12 meilleures équipes du pays, une reconnaissance qui témoigne de notre engagement, de notre travail acharné et de l'impact positif que nous continuons à avoir.",
  },
  {
    title: "Demi-finaliste 2023-2024",
    image: "/events/1.jpg",
    description: "Au cours de la saison Enactus 2023-2024, notre équipe s’est distinguée par une performance remarquable, soutenue par des projets à fort impact et une participation active aux différentes étapes du programme.",
  },
  {
    title: "Enactus Got Impact",
    image: "/events/1.jpg",
    description: "Notre engagement envers des causes porteuses de sens nous a valu le prix de l’impact social significatif, une reconnaissance de notre volonté de changer les choses concrètement et durablement.",
  },
];

function SousAccueil() {
  return (
    <section id='sousaccueil' className="achievement-hero">
      <div className="background-overlay" />
      <div className="achievement-container">
        {achievements.map((item, index) => (
          <div className={`achievement-row ${index % 2 !== 0 ? "reverse" : ""}`} key={index}>
            <div className="achievement-img">
              <img 
                src={item.image} 
                alt={item.title}
                loading="lazy"  // Optimized loading
              />
            </div>
            <div className="achievement-content">
              <div className="gold-line" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="achievement-number">{String(index + 1).padStart(2, '0')}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SousAccueil;