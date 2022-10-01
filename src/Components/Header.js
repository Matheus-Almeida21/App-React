import React from 'react';
import { Link } from 'react-router-dom';
import dogs from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className="appHeader">
      <nav className="appNav container">
        <Link className="appLogo" to="/" aria-label="Dogs - Home">
          <img src={dogs} alt="logo" />
        </Link>
        {data ? (
          <Link className="appLogin" to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className="appLogin" to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
