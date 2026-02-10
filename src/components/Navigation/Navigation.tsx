import cn from 'classnames';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav
      className={cn(
        'nav h-100 d-flex justify-content-center align-items-center',
      )}
    >
      <ul className="nav__list d-flex flex-column flex-lg-row gap-3 align-items-center list-unstyled m-0">
        <li className="nav__item ">
          <a
            className="nav__link  d-flex justify-content-center align-items-center text-decoration-none"
            href="#forWhom"
          >
            {t('navigation.forWhom')}
          </a>
        </li>
        <li className="nav__item ">
          <a
            className="nav__link  d-flex justify-content-center align-items-center text-decoration-none"
            href="#services"
          >
           {t('navigation.services')}
          </a>
        </li>
        <li className="nav__item">
          <a
            className="nav__link  d-flex align-items-center text-decoration-none"
            href="#services-details"
          >
            {t('navigation.details')}
          </a>
        </li>
        <li className="nav__item">
          <a
            className="nav__link  d-flex align-items-center text-decoration-none"
            href="#contacts"
          >
            {t('navigation.contacts')}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
