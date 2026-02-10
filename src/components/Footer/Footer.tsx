import { useTranslation } from 'react-i18next';
import type React from 'react';

type Props = {
  setPrivacyPolicy: (el: boolean) => void;
};

const Footer: React.FC<Props> = ({ setPrivacyPolicy }) => {
  const { t } = useTranslation();

  return (
    <footer className="footer w-100 py-5 px-3" id="footer">
      <div className="container d-flex flex-column gap-4">
        <div className="footer__top">
          <h2 className="title m-0">{t('footer.title')}</h2>
          <div className="footer__company-info d-flex flex-column gap-1">
            <span className="m-0 p-0 subtitle">{t('footer.companyInfo1')}</span>
            <span className="m-0 p-0 subtitle">{t('footer.companyInfo2')}</span>
          </div>
        </div>
        <div className="footer__hr"></div>
        <div className="footer__main d-flex flex-column gap-4 flex-md-row justify-content-between">
          <div className="footer__nav-block d-flex flex-column gap-2">
            <h4 className="m-0 footer__title fs-3">{t('footer.navigation')}</h4>
            <div className="footer__nav d-flex flex-column gap-2">
               <a
                href="#forWhom"
                className="footer__main-color text-decoration-none text-uppercase footer__link footer__main-text"
              >
                {t('footer.forWhom')}
              </a>
              <a
                href="#services"
                className="footer__main-color text-decoration-none text-uppercase footer__link footer__main-text"
              >
                {t('footer.services')}
              </a>
              <a
                href="#services-details"
                className="footer__main-color text-decoration-none text-uppercase footer__link footer__main-text"
              >
                {t('footer.more')}
              </a>
              <a
                href="#contacts"
                className="footer__main-color text-decoration-none text-uppercase footer__link footer__main-text"
              >
                {t('footer.contacts')}
              </a>
             
            </div>
          </div>
          <div className="footer_schedule-block d-flex flex-column gap-2">
            <h4 className="m-0 footer__title fs-3">{t('footer.workingHours')}</h4>
            <div className="">
              <span className="footer__main-color m-0 d-inline-block footer__main-text">
                {t('footer.workingHoursTime')}
              </span>
              <p className="footer__sub-title m-0 mt-2 ">{t('footer.responseTimeLabel')}</p>
              <span className="footer__main-color m-0 footer__main-text">
                {t('footer.responseTime')}
              </span>
            </div>
          </div>
          <div className="footer_result d-flex flex-column gap-2">
            <h4 className="m-0 footer__title fs-3">{t('footer.results')}</h4>
            <div className="">
              <p className="footer__main-color m-0 footer__main-text">
                <span className="footer__highlight ">400+ </span>{t('footer.checkedCars')}
              </p>

              <p className="footer__main-color m-0 footer__main-text">
                <span className="footer__highlight ">95%</span> {t('footer.successfulPurchases')}
              </p>
              <p className="footer__main-color m-0 footer__main-text">
                <span className="footer__highlight ">10+</span> {t('footer.yearsExperience')}
              </p>
            </div>
          </div>
        </div>
        <div className="footer__bottom d-flex justify-content-center flex-column gap-2 align-items-center">
          <div className="d-flex flex-column flex-md-row gap-md-3 align-items-center">
            <a
              className="footer__link footer__sub-title text-decoration-none"
              onClick={() => {
                setPrivacyPolicy(true);
              }}
            >
              {t('footer.privacyPolicy')}
            </a>
            <a
              href=""
              className="footer__link footer__sub-title text-decoration-none"
            >
              {t('footer.termsOfService')}
            </a>
          </div>
         <span className="m-0 footer__sub-title">© {new Date().getFullYear()} AB AutoCheck</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
