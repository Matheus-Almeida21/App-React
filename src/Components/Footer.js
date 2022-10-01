import React from 'react';
import dogs from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className="appFooter">
      <img src={dogs} />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
