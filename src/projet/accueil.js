import React from 'react';
import './accueil.css';
import SousAccueil from './sousaccueil';
import WaveDivider from '../WaveDivider';

export default function Accueil() {
  return (<>
    <section  className="accueil">
      
      <div className="background-wrapper">
        <img src="accueil.jpg" alt="Enactus Accueil" className="background-image" />
        <div className="grey-overlay"></div>
      </div>

      <div className="accueil-content">
        <div className="text-container">
          <h2 className="highlight-title">
            <span className="highlight yellow-step1"> ENACTUS FSBM</span>
          </h2>
          <h3 className="highlight-subtitle yellow-step2">
            ENTREPRENEURIAT - ACTION - US
          </h3>
          <h1 className="quote">
           <strong>  <span className="highlight-number"></span> 
           Fondée en mars 2014 par <span className="highlight-number">Abderazak Bouhram</span>, est l'héritière d'initiatives lancées en 2009 sous l'appellation SIFE. Depuis sa création, l’équipe développe des projets à impact social et économique, mobilisant chaque année 50 à 100 membres. <span className="highlight-number">Enactus FSBM</span> a récemment été classée parmi le top 12 du Maroc et a été demi-finaliste lors des compétitions 2023-2024.</strong>
          </h1>
          
        </div>
        
      </div>
          
    </section>
     <WaveDivider/>
    <SousAccueil/>
    </>

  );
}

