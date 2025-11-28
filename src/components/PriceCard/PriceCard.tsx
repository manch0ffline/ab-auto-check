function PriceCard() {
  return (
    <div className="price-card d-flex flex-column gap-2">
      <h4 className="price-card__title fs-5 fw-normal text-center m-0">Базовый</h4>
      <span className="price-card__price fw-bold fs-1 text-center m-0">400zl</span>
      <div className="price-card__description">
        <ul className="fs-6">
          <li className="fw-light">Диагности</li>
          <li className="fw-light">Диагности 12</li>
          <li className="fw-light">Диагно</li>
        </ul>
        <button className="price-card__btn w-100">Заказать</button>
      </div>
    </div>
  )
}

export default PriceCard