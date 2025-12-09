import cn from 'classnames';
import type React from 'react';

type Props = {
  recommended?: boolean
}

const PriceCard: React.FC<Props> = ({ recommended }) =>{
  return (
    // <div className="price-card d-flex flex-column gap-2" >
    <div
      className={cn('price-card d-flex flex-column gap-2', {
        'price-card--rec': recommended,
      })}
    >
      <h4 className="price-card__title fs-5 fw-normal text-center m-0">
        Базовый
      </h4>
      <span className="price-card__price fw-bold fs-1 text-center m-0">
        400zl
      </span>
      <div className="price-card__description d-flex flex-column gap-4">
        <div className="price-card__content">
          <div className="price-card__item-content d-flex">
            <div className="price-card__chech-icon"></div>
            <span className="fw-light">Диагности</span>
          </div>
          <div className="price-card__item-content ">
            <div className="price-card__chech-icon"></div>
            <span className="fw-light">Диагности</span>
          </div>
          <div className="price-card__item-content ">
            <div className="price-card__chech-icon"></div>
            <span className="fw-light">Диагности</span>
          </div>
          <div className="price-card__item-content ">
            <div className="price-card__chech-icon"></div>
            <span className="fw-light">Диагности</span>
          </div>
        </div>

        <button className="price-card__btn w-100">Заказать</button>
      </div>
    </div>
  );
}

export default PriceCard;
