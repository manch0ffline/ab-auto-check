import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  setPrivacyPolicy: (el: boolean) => void;
};

const PrivacyPolicy: React.FC<Props> = ({ setPrivacyPolicy }) => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy">
      <div className="container privacy-policy__content">
        <button
          className="privacy-policy__btn mb-3"
          onClick={() => setPrivacyPolicy(false)}
        >
          {t('privacyPolicy.backButton')}
        </button>

        <h1>{t('privacyPolicy.title')}</h1>
        <p>
          {t('privacyPolicy.intro')}
          <strong>{t('privacyPolicy.companyName')}</strong>
        </p>

        <h2>{t('privacyPolicy.section1.title')}</h2>
        <p>
          {t('privacyPolicy.section1.content')}
        </p>
        <p>{t('privacyPolicy.section1.ownership')}</p>

        <h2>{t('privacyPolicy.section2.title')}</h2>
        <p>{t('privacyPolicy.section2.content')}</p>
        <ul>
          <li>{t('privacyPolicy.section2.item1')}</li>
          <li>{t('privacyPolicy.section2.item2')}</li>
          <li>{t('privacyPolicy.section2.item3')}</li>
        </ul>

        <h2>{t('privacyPolicy.section3.title')}</h2>
        <p>{t('privacyPolicy.section3.content')}</p>
        <ul>
          <li>{t('privacyPolicy.section3.item1')}</li>
          <li>{t('privacyPolicy.section3.item2')}</li>
          <li>{t('privacyPolicy.section3.item3')}</li>
          <li>{t('privacyPolicy.section3.item4')}</li>
        </ul>

        <h2>{t('privacyPolicy.section4.title')}</h2>
        <p>{t('privacyPolicy.section4.content')}</p>
        <ul>
          <li>{t('privacyPolicy.section4.item1')}</li>
          <li>{t('privacyPolicy.section4.item2')}</li>
          <li>{t('privacyPolicy.section4.item3')}</li>
        </ul>

        <h2>{t('privacyPolicy.section5.title')}</h2>
        <p>{t('privacyPolicy.section5.content')}</p>

        <h2>{t('privacyPolicy.section6.title')}</h2>
        <p>{t('privacyPolicy.section6.content')}</p>

        <h2>{t('privacyPolicy.section7.title')}</h2>
        <p>{t('privacyPolicy.section7.content')}</p>
        <ul>
          <li>{t('privacyPolicy.section7.item1')}</li>
          <li>{t('privacyPolicy.section7.item2')}</li>
        </ul>

        <h2>{t('privacyPolicy.section8.title')}</h2>
        <p>{t('privacyPolicy.section8.content')}</p>
        <ul>
          <li>{t('privacyPolicy.section8.item1')}</li>
          <li>{t('privacyPolicy.section8.item2')}</li>
        </ul>

        <h2>{t('privacyPolicy.section9.title')}</h2>
        <p>{t('privacyPolicy.section9.content')}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
