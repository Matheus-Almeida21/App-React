import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import feed from '../../Assets/feed.svg';
import estatisticas from '../../Assets/estatisticas.svg';
import adicionarFoto from '../../Assets/adicionar.svg';
import sair from '../../Assets/sair.svg';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <React.Fragment>
      {mobile && (
        <button
          aria-label="Menu"
          className={`appMobileButton ${
            mobileMenu === true ? 'appMobileButtonActive' : ''
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? 'appNavMobile' : 'appUserNav'} ${
          mobileMenu && 'appNavMobileActive'
        }`}
      >
        <NavLink to="/conta" end>
          <img src={feed} />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <img src={estatisticas} />
          {mobile && 'Estatisticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <img src={adicionarFoto} />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <img src={sair} />
          {mobile && 'Sair'}
        </button>
      </nav>
    </React.Fragment>
  );
};

export default UserHeaderNav;
