import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  typeName: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  weigth: PropTypes.number.isRequired,
};

function Card({ name, typeName, urlImage, weigth }) {
  return (
    <a href="#" className="card-pokemon">
      <img src={urlImage} alt={`Pokemon ${name}`} />
      <h2>{name}</h2>
      <p>{typeName}</p>
      <p>{weigth}</p>
    </a>
  );
}

Card.propTypes = propTypes;

export default Card;
