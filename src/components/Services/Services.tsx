import { useTranslation } from 'react-i18next';
import { servicesShort } from '../../dataShort';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="services" id="services">
      <div className="container d-flex flex-column gap-5 services__container">
        <h2 className="fs-1 services__title text-center ">
          {t('services.title')}
        </h2>
        <div className="row gap-4 justify-content-center">
          {servicesShort.map((service) => (
            <div className="services__block col-12 col-lg-5 col-xl-3 d-flex flex-column justify-content-between">
              <div className="d-flex flex-column justify-content-between services__block__top">
                <div className={`services__icon ${service.icon}`}></div>
                <h3 className="services__title-block">{service.title}</h3>
                <hr />
              </div>
              <div className="d-flex flex-column h-100 justify-content-between gap-3">
                <div
                  className="d-flex flex-column h-100 "
                  style={{
                    flex: 1,
                  }}
                >
                  <p className="services__price">
                    Цена: <span className="fw-light"> {service.price}</span>
                  </p>
                  <div className="services__info">
                    {service.description.map((desc) => (
                      <p>{desc}</p>
                    ))}
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <a href='#services-details' className="services__link text-center">{`Подробнее >`}</a>
                  <button className="services__btn">Заказать</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
