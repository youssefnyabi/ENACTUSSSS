import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './logo - enactus fsbm.png';

export default function Navbar() {
  useEffect(() => {
    const header = document.querySelector('.navbar-header');
    const handleScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add('transparent');
      } else {
        header.classList.remove('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="navbar-logo-section">
          <Link to="/"><img src={logo} alt="Club Logo" className="navbar-logo" /></Link>
        </div>
        <ul type='none' className="navbar-links">
          <li><Link to="/" className="navbar-link">ACCUEIL</Link></li>
          <li> <a href="#sousaccueil" className="navbar-link">NOS RÉALISATIONS</a></li>
          <li><Link to="/membres" className="navbar-link">MEMBRES</Link></li>
          <li><Link to="/evenements" className="navbar-link">ÉVÉNEMENTS</Link></li>
          <li><Link to="/rejoindre"  className="navbar-link join-button">REJOINDRE LE CLUB</Link></li>
        </ul>
      </nav>
    </header>
  );
}
