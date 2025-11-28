import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.png';
import type React from 'react';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';

type Props = {
  isMenu?: boolean;
};

const TopBar: React.FC<Props> = ({ isMenu = false }) => {
  return (
    <div className="top-bar d-flex justify-content-between align-items-center">
      <a href="#" className="top-bar__logo-link">
        <img src={logo} alt="logo" className="h-100" />
      </a>

      {/* Навигация только на desktop */}
      <div className="d-none d-lg-block h-100">
        <Navigation />
      </div>

      {/* Меню-иконка только на mobile */}
      <div className="d-flex align-items-center gap-3">
        {!isMenu && <ChangeLanguage />}

        {isMenu ? (
          <a
            href="#"
            className="d-lg-none text-end d-block icon icon--close"
          ></a>
        ) : (
          <a href="#menu" className="d-lg-none d-block icon icon--menu"></a>
        )}
      </div>
    </div>
  );
};

export default TopBar;
