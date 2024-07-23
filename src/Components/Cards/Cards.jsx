import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Cards.css';

function Cards() {
  return (
    <>
      <div id='home' className='title-card-container'>
        <div className='left-side'>
          <h1>Black Moon Cosmetics</h1>
          <p>¡Unite a la familia Black Moon, vende nuestros productos!</p>
          <p>Somos la empresa de cosmeticos mas aclamada por los estilos alternativos, con nuestros productos de calidad, gamas de colores y tonos para todo tipo de pieles.
            Tambien podes visitar nuestra tienda onlone para ver nuestros productos.
          </p>
          <Button variant="secondary" className="visit-store-button">Visitar tienda online</Button>
        </div>
        
        <Card className='right-card'>
          <Card.Img variant="top" src="./src/img/moon2.jpg" className="responsive-img"/>
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>Black Moon Cosmetics</h1>
              <p>¡Unite a la familia Black Moon, vende nuestros productos!</p>
              <p>Somos la empresa de cosmeticos mas aclamada por los estilos alternativos, con nuestros productos de calidad, gamas de colores y tonos para todo tipo de pieles.
                Tambien podes visitar nuestra tienda onlone para ver nuestros productos.
              </p>
              <Button variant="secondary" className="visit-store-button">Visitar tienda online</Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Cards;
