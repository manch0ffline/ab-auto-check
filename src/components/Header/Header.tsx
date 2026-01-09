import TopBar from '../TopBar/TopBar';
import { Trans, useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container d-flex flex-column h-100 text-white px-3">
        <TopBar />

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
          <div className="header__button-container ">
            <a href="#about-us" className="header__button--link ">
              <button className="header__button  p-2 fs-5">
                {t('button.submitRequest')}
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
