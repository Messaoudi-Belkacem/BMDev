
import React from 'react';
import PropTypes from 'prop-types';
import './technology.css';

const Technology = ({ imageSrc, name, href}) => {
  return (
    <a href={href} target='_blank' className='__bmdev-technology'>
      <img src={imageSrc} alt={name} className='technology-image' />
      <p className='technology-name'>{name}</p>
    </a>
  );
};

Technology.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default Technology;