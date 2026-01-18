import { useTranslation } from 'react-i18next';
import { services } from '../../data';
import type React from 'react';


type Props = {
  setActiveDetail: (el: number) => void;
};

const Services: React.FC<Props> = ({ setActiveDetail }) => {
  const { t } = useTranslation();

  return (
    <div className="services" id="services">
      <div className="container d-flex flex-column gap-5 services__container">
        <h2 className="fs-1 services__title text-center ">
          {t('services.title')}
        </h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-12 col-lg-4 col-xl-6 px-2"
              key={service.id}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="services__block d-flex flex-column justify-content-between h-100">
                <div className="d-flex gap-3 align-items-center services__block__top mb-2">
                  <div className={`services__icon ${service.icon}`}></div>
                  <h3 className="services__title-block">{service.title}</h3>
                </div>
                <p className="services__description m-0">
                  {service.description}
                </p>
                <hr className="my-3" />
                <div className="d-flex flex-column h-100 justify-content-between gap-3">
                  <p className="services__price m-0">
                    Цена: <span> {service.price}</span>
                  </p>

                  <div className="d-flex gap- w-100 justify-content-between align-items-center">
                    <a
                      href="#contacts"
                      className="services__btn services__btn--order"
                    >
                      Заказать
                    </a>
                    <a
                      href="#services-details"
                      className="services__link"
                      onClick={() => setActiveDetail(service.id)}
                    >
                      Инфо&nbsp;⟶
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p
          className="m-0 text-center"
          style={{
            color: '#f7fbe4',
          }}
        >
          Выезд за пределы Познани: <span>1.20 zł / км</span>
        </p>
      </div>
    </div>
  );
};

export default Services;
