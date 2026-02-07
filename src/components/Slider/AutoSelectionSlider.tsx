import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Slide = {
  title: string;
  desc: string;
  icon: string;
};

const slides: Slide[] = [
  {
    title: 'Покупаете автомобиль впервые',
    desc: 'Не разбираетесь в технических нюансах и боитесь купить проблемный или битый авто.',
    icon: 'icon--car',
  },
  {
    title: 'Не хотите рисковать деньгами',
    desc: 'Скрученный пробег и скрытые ДТП — мы исключаем такие варианты.',
    icon: 'icon--money',
  },
  {
    title: 'Цените своё время',
    desc: 'Не нужно ездить по десяткам объявлений — мы сделаем всё за вас.',
    icon: 'icon--time',
  },
  {
    title: 'Покупаете авто с пробегом',
    desc: 'Проведём полную техническую и юридическую проверку перед покупкой.',
    icon: 'icon--examination',
  },
  {
    title: 'Лучший авто в своём бюджете',
    desc: 'Подберём оптимальный вариант по цене, состоянию и комплектации.',
    icon: 'icon--best',
  },
  {
    title: 'Не разбираетесь в рынке',
    desc: 'Подскажем реальную стоимость и поможем сторговаться.',
    icon: 'icon--info',
  },
  {
    title: 'Находитесь в другом городе',
    desc: 'Проверим авто за вас и сделаем фото- и видеоотчёт.',
    icon: 'icon--location',
  },
  {
    title: 'Не хотите связываться с перекупами',
    desc: 'Работаем только с честными продавцами.',
    icon: 'icon--safety',
  },
];

export const AutoSelectionSlider = () => {
  return (
    <div className="auto-slider-section__container" id="forWhom">
      <section className="auto-slider-section">
        <h2 className="title title--underline">
          Для кого подходит автоподбор
        </h2>
        <p className="subtitle">
          Если узнаёте себя хотя бы в одном пункте — автоподбор вам реально
          поможет.
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
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};
