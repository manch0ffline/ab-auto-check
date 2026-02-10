import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

type Slide = {
  title: string;
  desc: string;
  icon: string;
};

const slides: Slide[] = [
  {
    title: 'firstCarPurchase',
    desc: 'dontKnowTechnicalities',
    icon: 'icon--car',
  },
  {
    title: 'dontWantToRiskMoney',
    desc: 'odometerRollbackAndHiddenAccidents',
    icon: 'icon--money',
  },
  {
    title: 'valueYourTime',
    desc: 'noNeedToCheckMultipleAds',
    icon: 'icon--time',
  },
  {
    title: 'buyUsedCar',
    desc: 'fullTechnicalAndLegalCheck',
    icon: 'icon--examination',
  },
  {
    title: 'bestCarInBudget',
    desc: 'optimumChoiceByPriceConditionAndConfiguration',
    icon: 'icon--best',
  },
  {
    title: 'dontUnderstandTheMarket',
    desc: 'weWillTellYouRealCostAndHelpNegotiate',
    icon: 'icon--info',
  },
  {
    title: 'locatedInAnotherCity',
    desc: 'weCheckCarForYouAndProvidePhotoAndVideoReport',
    icon: 'icon--location',
  },
  {
    title: 'dontWantToDealWithResellers',
    desc: 'weWorkOnlyWithHonestSellers',
    icon: 'icon--safety',
  },
];

export const AutoSelectionSlider = () => {
  const { t } = useTranslation();

  return (
    <div className="auto-slider-section__container" id="forWhom">
      <section className="auto-slider-section">
        <h2 className="title title--underline">
          {t('autoSelection.title')}
        </h2>
        <p className="subtitle">
          {t('autoSelection.subtitle')}
        </p>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides
          loop
          autoplay={{ delay: 5000 }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            650: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="slide-card d-flex align-items-center">
                <div
                  className={`icon__type--card icon ${slide.icon}`}
                ></div>
                <h3>{t(`autoSelection.slides.${slide.title}.title`)}</h3>
                <p>{t(`autoSelection.slides.${slide.title}.desc`)}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};
