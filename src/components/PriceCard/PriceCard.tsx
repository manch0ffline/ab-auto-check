import cn from 'classnames';
import type React from 'react';
import type { Service } from '../../types/ServiceType';

type Props = {
  recommended?: boolean;
  service: Service;
};

const PriceCard: React.FC<Props> = ({ recommended, service }) => {
  return (
    <div
      className={cn('price-card d-flex flex-column gap-2', {
        'price-card--rec': recommended,
      })}
    >
      <h4
        className="price-card__title fs-5 fw-normal text-center m-0"
        style={{
          color: '#c7b88e',
        }}
      >
        {service.title}
      </h4>
      <span
        className="price-card__price fw-bold fs-1 text-center m-0"
        style={{
          color: '#ddc483',
        }}
      >
        {service.price}
      </span>

      <div className="price-card__description d-flex flex-column gap-4">
        <div className="price-card__content  d-flex flex-column justify-content-start">
          <div className={cn('price-dropdown__dropdown', {})}>
            {service.description.map((desc, i) => (
              <div
                key={i}
                className="price-card__item-content fw-light"
                style={{
                  color: '#ded7bbff',
                }}
              >
                {desc}
              </div>
            ))}
          </div>
        </div>
      </div>

      

      <button className="price-card__btn w-100">Заказать</button>
    </div>
  );
};

export default PriceCard;
