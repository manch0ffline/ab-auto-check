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
        <h2 className="title text-center">{t('services.title')}</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-12 col-lg-6 px-2"
              key={service.id}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div
                className={`services__block ${service.recomended && 'services__block--recomended'} d-flex flex-column justify-content-between h-100`}
              >
                {service.recomended && (
                  <div className="services__block--recomended__type">
                    {t('services.recommended')}
                  </div>
                )}
                <div className="d-flex gap-3 align-items-center services__block__top mb-2">
                  <div
                    className={`services__icon-block  ${service.recomended && 'services__icon-block--recomended'}`}
                  >
                    <div className={`services__icon ${service.icon}`}></div>
                  </div>
                  <h3 className="services__title-block">{t(`servicesList.${service.id}.title`)}</h3>
                </div>
                <p className="services__description mt-2">
                  {t(`servicesList.${service.id}.description`)}
                </p>
                <div className="my-3 services__hr" />
                <div className="d-flex flex-column h-100 justify-content-between gap-3">
                  <p className="services__price-block m-0 d-flex flex-column">
                    {service.bargain ? t('services.priceFrom') : t('services.price')}
                    <div className="">
                      <span className="services__price"> {service.price}</span>
                      <span className="services__bargain">
                        {' '}
                       { t(`servicesList.${service.id}.bargain`)}
                      </span>
                    </div>
                  </p>

                  <div className="d-flex gap- w-100 justify-content-between align-items-center">
                    <a
                      href="#contacts"
                      className="services__btn services__btn--order"
                    >
                      {t('services.order')}
                    </a>
                    <a
                      href="#services-details"
                      className="services__link"
                      onClick={() => setActiveDetail(service.id)}
                    >
                      {t('services.info')} ⟶
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p
          className="m-0 text-center fs-5"
          style={{
            color: '#1e1701',
          }}
        >
          {t('services.outOfPoznan')} <span className='d-inline-block text-nowrap'>1 zł/км</span>
        </p>
      </div>
    </div>
  );
};

export default Services;
