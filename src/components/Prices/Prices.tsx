import PriceCard from "../PriceCard/PriceCard";

function Prices() {
  return (
    <div className="prices" id="prices">
      <div className="container">
        <div className="prices__content d-flex flex-column align-items-center gap-3">
          <div className="prices__info">
            <h2 className="fs-1 text-center">Цены</h2>
            <p className="prices__description text-center">
              Мы предлагаем прозрачное ценообразование без скрытых платежей. Вы
              можете выбрать подходящий тариф для своих нужд
            </p>
          </div>
          <div className="prices__cards d-flex justify-content-center gap-5 w-100 flex-wrap">
            <PriceCard />
            <PriceCard recommended={true} />
            <PriceCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
