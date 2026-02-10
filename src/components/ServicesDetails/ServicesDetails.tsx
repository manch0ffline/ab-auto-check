import { useTranslation } from 'react-i18next';
import { services } from '../../data';
import type React from 'react';

type Props = {
  activeDetail: number;
};

const ServicesDetails: React.FC<Props> = ({ activeDetail }) => {
  const { t } = useTranslation();

  return (
    <div
      className="services-details services-details__container w-100 py-5 px-3"
      id="services-details"
    >
      <div className="container d-flex flex-column gap-4">
        <h2 className="title title--underline text-center">
          {t('servicesDetails.title')}
        </h2>

        <div className="row gy-4">
          <div className="col-12 col-md-3 services-details__salesman-info">
            <p
              className="d-flex flex-column align-items-center"
              data-aos="fade-right"
            >
              <span>10+ </span> {t('servicesDetails.experience')}
            </p>
            <hr />
            <p
              className="d-flex flex-column align-items-center"
              data-aos="fade-right"
            >
              <span>400+</span> {t('servicesDetails.checkedCars')}
            </p>
            <hr />
            <p
              className="d-flex flex-column align-items-center"
              data-aos="fade-right"
            >
              <span>95% </span> {t('servicesDetails.successfulPurchases')}
            </p>
            <hr />
            <p
              className="d-flex flex-column align-items-center"
              data-aos="fade-right"
            >
              {t('servicesDetails.location')}
            </p>
          </div>
          <div className="col-12 col-md-9">
            <div className="accordion" id="accordionExample">
              {services.map((item) => {
                const headingId = `heading-${item.id}`;
                const collapseId = `collapse-${item.id}`;

                return (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button ${
                          item.id !== activeDetail ? 'collapsed' : ''
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={item.id === activeDetail ? 'true' : 'false'}
                        aria-controls={collapseId}
                      >
                        {t(`servicesList.${item.id}.title`)}
                      </button>
                    </h2>

                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${
                        item.id === activeDetail ? 'show' : ''
                      }`}
                      aria-labelledby={headingId}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body services-details__info">
                       {item.suitableFor && 
                         <span className="m-0 services-details__aditional-info">
                          {t(`servicesList.${item.id}.suitableFor`)}
                        </span>
                       }

                        {item.includedServices.map((_, index) => (
                          <p key={index}>{t(`servicesList.${item.id}.includedServices.${index}`)}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
