import TopBar from '../TopBar/TopBar';
import { Trans, useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header__top-bat-bg">
        <div className="container">
          <TopBar />
        </div>
      </div>
      <div className="container d-flex flex-column h-100 text-white px-3">
        <div className="header__content d-flex flex-column justify-content-center gap-5">
          <div>
            <h1 className="header__title">
              <Trans i18nKey={'header.title'} components={{ br: <br /> }} />
            </h1>

            <div className="header__overview">
              <p className="header__overview-content">
                <Trans
                  i18nKey={'header.overview'}
                  components={{ br: <br /> }}
                />
              </p>
            </div>
          </div>
          <div className="header__button-container d-flex gap-3 flex-column flex-sm-row">
            <a href="#contacts" className="header__button--link ">
              <button className="header__button  p-2 fs-5">
                {t('header.buttons.submitRequest')}
              </button>
            </a>
            <a href="#services" className="header__button--link ">
              <button className="header__button header__button--services  p-2 fs-5">
                {t('header.buttons.services')}
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
