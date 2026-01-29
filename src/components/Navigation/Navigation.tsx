import cn from 'classnames';

const Navigation = () => {
  return (
    <nav
      className={cn(
        'nav h-100 d-flex justify-content-center align-items-center'
      )}
    >
      <ul className="nav__list d-flex flex-column flex-lg-row gap-5 align-items-center list-unstyled m-0">
        <li className="nav__item ">
          <a
            className="nav__link  d-flex justify-content-center align-items-center text-decoration-none"
            href="#forWhom"
          >
           Для кого
          </a>
        </li>
        <li className="nav__item ">
          <a
            className="nav__link  d-flex justify-content-center align-items-center text-decoration-none"
            href="#services"
          >
            Наши услуги
          </a>
        </li>
        <li className="nav__item">
          <a
            className="nav__link  d-flex align-items-center text-decoration-none"
            href="#services-details"
          >
           Подробнее
          </a>
        </li>
        <li className="nav__item">
          <a
            className="nav__link  d-flex align-items-center text-decoration-none"
            href="#contacts"
          >
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
