import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="services" id='services'>
      <div className="container d-flex flex-column gap-3 services__container">
        <h2 className="fs-1 services__title">{t('services.title')}</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button d-flex gap-2 align-items-center justify-content-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div className="icon icon--key"></div>
                <p className="m-0 fs-4">{t('services.accordion.sectionOne.title')}</p>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t('services.accordion.sectionOne.description')}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed d-flex gap-2 align-items-center justify-content-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <div className="icon icon--repeat-once"></div>
                <p className="m-0 fs-4">{t('services.accordion.sectionTwo.title')}</p>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t('services.accordion.sectionTwo.description')}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed d-flex gap-2 align-items-center justify-content-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <div className="icon icon--car-diagnostics"></div>
                <p className="m-0 fs-4">{t('services.accordion.sectionThree.title')}</p>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t('services.accordion.sectionThree.description')}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed d-flex gap-2 align-items-center justify-content-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <div className="icon icon--money"></div>
                <p className="m-0 fs-4">{t('services.accordion.sectionFour.title')}</p>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t('services.accordion.sectionFour.description')}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed d-flex gap-2 align-items-center justify-content-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <div className="icon icon--verification"></div>
                <p className="m-0 fs-4">{t('services.accordion.sectionFive.title')}</p>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t('services.accordion.sectionFive.description')}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed d-flex gap-2 align-items-center justify-content-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                <div className="icon icon--support"></div>
                <p className="m-0 fs-4">{t('services.accordion.sectionSix.title')}</p>
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t('services.accordion.sectionSix.description')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
