import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <h3>¡Siguenos en nuestras redes!</h3>
        <ul className='icons'>
          <li><i className="fab fa-instagram"></i></li>
          <li><i className="fab fa-facebook"></i></li>
          <li><i className="fab fa-twitter"></i></li>
          <li><i className="fab fa-youtube"></i></li>
        </ul>
        <p>© Black Moon Cosmetics. Todos los derechos reservados.</p>
      </div>
      <div>
        <img src='/img/footer.jpg' alt="Footer Image" />
      </div>
    </div>
  )
}

export default Footer;
