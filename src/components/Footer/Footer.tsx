import type React from 'react';
type Props = {
  setPrivacyPolicy: (el: boolean) => void;
};

const Footer: React.FC<Props> = ({ setPrivacyPolicy }) => {
  return (
    <footer className="footer w-100 py-5 px-3" id="footer">
      <div className="container d-flex flex-column gap-4 ">
        <div className="footer__top">
          <h2 className="fs-1 footer__title ">AB AutoCheck</h2>
          <div className="footer__company-info d-flex flex-column gap-2">
            <span className="m-0 p-0 footer__main-color footer__main-text">
              Автоподбор и проверка автомобилей в Польше
            </span>
            <span className="m-0 p-0 footer__main-color footer__main-text">
              Познань и выезд по регионам
            </span>
           
          </div>
        </div>
        <div className="footer__hr"></div>
        <div className="footer__main d-flex flex-column gap-4 flex-md-row justify-content-between">
          <div className="footer__nav-block d-flex flex-column gap-2">
            <h4 className="m-0 footer__title fs-3">Навигация</h4>
            <div className="footer__nav d-flex flex-column gap-2">
              <a
                href="#services"
                className="footer__main-color text-decoration-none text-uppercase footer__link footer__main-text"
              >
                Наши услуги
              </a>
              <a
                href="#services-details"
                className="footer__main-color text-decoration-none text-uppercase footer__link footer__main-text"
              >
                Подробнее
              </a>
              <a
                href="#contacts"
                className="footer__main-color text-decoration-none text-uppercase footer__link footer__main-text"
              >
                Контакты
              </a>
            </div>
          </div>
          <div className="footer_schedule-block d-flex flex-column gap-2">
            <h4 className="m-0 footer__title fs-3">График работы</h4>
            <div className="">
              <span className=" footer__main-color m-0 d-inline-block footer__main-text">
                Пн-Вс: 9:00 - 22:00
              </span>
              <p className=" footer__sub-title m-0 mt-2 ">
                Среднее время ответа:
              </p>
              <span className="footer__main-color m-0 footer__main-text">
                10-15 минут
              </span>
            </div>
          </div>
          <div className="footer_result d-flex flex-column gap-2">
            <h4 className="m-0 footer__title fs-3">Наши результаты</h4>
            <div className="">
              <p className=" footer__main-color m-0 footer__main-text">
                <span className="footer__highlight ">400+ </span>провереных авто
              </p>

              <p className="footer__main-color m-0 footer__main-text">
                <span className="footer__highlight ">95%</span> удачных покупок
              </p>
              <p className="footer__main-color m-0 footer__main-text">
                <span className="footer__highlight ">10+</span> лет опыта
              </p>
            </div>
          </div>
        </div>
        <div className="footer__bottom d-flex justify-content-center flex-column gap-2 align-items-center">
          <div className="d-flex flex-column flex-md-row  gap-md-3 align-items-center">
            <a
              className="footer__link footer__sub-title text-decoration-none "
              onClick={() => {
                setPrivacyPolicy(true);
              }}
            >
              Политика конфиденциальности
            </a>
            <a
              href=""
              className="footer__link footer__sub-title text-decoration-none"
            >
              Условия оказания услуг
            </a>
          </div>
          <span className="m-0 footer__sub-title">© 2025 AB AutoCheck</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
