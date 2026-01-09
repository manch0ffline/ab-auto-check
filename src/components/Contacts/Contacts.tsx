function Contacts() {
  return (
    <div className="contacts" id="contacts">
      <div className="container d-flex flex-column gap-5 services__container">
        <div className="">
          <h2 className="fs-1 contacts__title text-center">
            Связатся c AB AutoCheck
          </h2>
          <p
            className="m-0 text-center"
            style={{
              color: '#f7fbe4',
            }}
          >
            На связи личный владелец - Андрей <br /> Отвечаю лично. Без
            менеджеров.
          </p>
        </div>
        <div className="contacts__blocks row g-3">
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="contacts__block d-flex gap-3  justify-content-center">
              <div className="contacts__icon icon--insta"></div>
              <div className="">
                <h3>Instagram</h3>
                <a
                  className="contacts__link"
                   target="_blank"
                  href="https://www.instagram.com/ab.autochek?igsh=MW1ha3dwd2pkYXAxMw%3D%3D&utm_source=qr"
                >
                  НАПИСАТЬ
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="contacts__block d-flex gap-3 justify-content-center">
              <div className="contacts__icon icon--facebook"></div>
              <div className="">
                <h3>Facebook</h3>
                <a
                  className="contacts__link"
                  target="_blank"
                  href="https://www.facebook.com/share/16rSy6CEoP/?mibextid=wwXIfr"
                >
                  НАПИСАТЬ
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="contacts__block d-flex gap-3 justify-content-center">
              <div className="contacts__icon icon--telegram"></div>
              <div className="">
                <h3>Telegram</h3>
                <a
                  className="contacts__link"
                   target="_blank"
                  href="https://t.me/ab_autochek"
                >
                  НАПИСАТЬ
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="contacts__block d-flex gap-3 justify-content-center">
              <div className="contacts__icon icon--phone"></div>
              <div className="">
                <h3>Номер</h3>
                <a className="contacts__link" href="tel:+48537634858">
                  +48537634858
                </a>
              </div>
            </div>
          </div>
        </div>
        <p
          className="m-0 text-center"
          style={{
            color: '#f7fbe4',
          }}
        >
          ⏱ Ответ в течение 10–15 минут
          <br />
          Время работы Пн-Нд, с 9:00 до 22:00
        </p>
      </div>
    </div>
  );
}

export default Contacts;
