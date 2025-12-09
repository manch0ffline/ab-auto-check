import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="services" id="services">
      <div className="container d-flex flex-column gap-5 services__container">
        <h2 className="fs-1 services__title text-center ">
          {t('services.title')}
        </h2>
        {/* <div className="row row-cols-1 row-cols-sm-6 row-cols-md-3 row-cols-lg-4 gap-4 justify-content-center"> */}
        <div className="row gap-4 justify-content-center">
          <div className="services__block col-12 col-sm-5 col-md-5 col-lg-3 d-flex flex-column justify-content-between">
            <div className="services__icon icon--car"></div>
            <h3 className="services__title-block">
              {t('services.accordion.sectionOne.title')}
            </h3>
            <p className="services__description">
              {t('services.accordion.sectionOne.description')}
            </p>
          </div>

          <div className="services__block col-12 col-sm-5 col-md-5 col-lg-3 d-flex flex-column justify-content-between">
            <div className="services__icon icon--one-time"></div>
            <h3 className="services__title-block">
              {t('services.accordion.sectionTwo.title')}
            </h3>
            <p className="services__description">
              {t('services.accordion.sectionTwo.description')}
            </p>
          </div>

          <div className="services__block col-12 col-sm-5 col-md-5 col-lg-3 d-flex flex-column justify-content-between">
            <div className="services__icon icon--before-purchase-icon"></div>
            <h3 className="services__title-block">
              {t('services.accordion.sectionThree.title')}
            </h3>
            <p className="services__description">
              {t('services.accordion.sectionThree.description')}
            </p>
          </div>

          <div className="services__block col-12 col-sm-5 col-md-5 col-lg-3 d-flex flex-column justify-content-between">
            <div className="services__icon icon--documents"></div>
            <h3 className="services__title-block">
              {t('services.accordion.sectionFour.title')}
            </h3>
            <p className="services__description">
              {t('services.accordion.sectionFour.description')}
            </p>
          </div>

          <div className="services__block col-12 col-sm-5 col-md-5 col-lg-3 d-flex flex-column justify-content-between">
            <div className="services__icon icon--online-consultation"></div>
            <h3 className="services__title-block">
              {t('services.accordion.sectionFive.title')}
            </h3>
            <p className="services__description">
              {t('services.accordion.sectionFive.description')}
            </p>
          </div>

          <div className="services__block col-12 col-sm-5 col-md-5 col-lg-3 d-flex flex-column justify-content-between">
            <div className="services__icon icon--cost-assessment"></div>
            <h3 className="services__title-block">
              {t('services.accordion.sectionSix.title')}
            </h3>
            <p className="services__description">
              {t('services.accordion.sectionSix.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
