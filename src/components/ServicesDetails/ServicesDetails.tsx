import { services } from '../../data';

function ServicesDetails() {
  return (
    <div className="services-details w-100 py-5" id='services-details'>
      <div className="container d-flex flex-column gap-4">
        <h2 className="fs-1 services-details__title text-center ">
          Детали подбора
        </h2>

        <div className="row gy-4">
          <div className="col-12 col-md-3 services-details__salesman-info">
            <p className="d-flex flex-column align-items-center">
              <span>10+ </span>лет опыта
            </p>
            <hr />
            <p className="d-flex flex-column align-items-center">
              <span>400+</span> провереных машин
            </p>
            <hr />
            <p className="d-flex flex-column align-items-center">
              <span>95% </span>удачных прокупок
            </p>
            <hr />
            <p className="d-flex flex-column align-items-center">
              Познань, Польша
            </p>
          </div>
          <div className="col-12 col-md-9">
            <div className="accordion" id="accordionExample">
              {services.map((item) => {
                const headingId = `heading-${item.id}`;
                const collapseId = `collapse-${item.id}`;

                return (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button ${
                          item.id !== 1 ? 'collapsed' : ''
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={item.id === 1 ? 'true' : 'false'}
                        aria-controls={collapseId}
                      >
                        {item.title}
                      </button>
                    </h2>

                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${
                        item.id === 1 ? 'show' : ''
                      }`}
                      aria-labelledby={headingId}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body services-details__info">
                        {item.description.map((desc) => (
                          <p>{desc}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;
