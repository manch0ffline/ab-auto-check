import type { ContactItem } from "../../types/ContactItemType";

const contacts: ContactItem[] = [
  {
    id: 'instagram',
    title: 'Instagram',
    icon: 'icon--insta',
    link:
      'https://www.instagram.com/ab.autochek?igsh=MW1ha3dwd2pkYXAxMw%3D%3D&utm_source=qr',
    aos: 'fade-right',
    delay: 200,
    external: true,
    label: 'НАПИСАТЬ',
  },
  {
    id: 'facebook',
    title: 'Facebook',
    icon: 'icon--facebook',
    link: 'https://www.facebook.com/share/16rSy6CEoP/?mibextid=wwXIfr',
    aos: 'fade-right',
    external: true,
    label: 'НАПИСАТЬ',
  },
  {
    id: 'telegram',
    title: 'Telegram',
    icon: 'icon--telegram',
    link: 'https://t.me/ab_autochek',
    aos: 'fade-left',
    external: true,
    label: 'НАПИСАТЬ',
  },
  {
    id: 'phone',
    title: 'Номер',
    icon: 'icon--phone',
    link: 'tel:+48537634858',
    aos: 'fade-left',
    label: '+48 537 634 858',
  },
];


function Contacts() {
  return (
    <div className="contacts" id="contacts">
      <div className="container d-flex flex-column gap-5 services__container">

        {/* Title */}
        <h2 className="title text-center">
          Связаться c AB AutoCheck
        </h2>

        {/* Blocks */}
        <div className="contacts__blocks row g-3">

          {contacts.map(
            ({ id, title, icon, link, aos, delay, external, label }) => (
              <div
                key={id}
                className="col-12 col-lg-6 col-xxl-3"
                data-aos={aos}
                data-aos-delay={delay}
              >
                <div className="contacts__block d-flex flex-column gap-4 justify-content-center">

                  <div className="d-flex gap-3 align-items-center">
                   <div className="contacts__icon-block">
                     <div className={`contacts__icon ${icon}`} />
                   </div>
                    <h3 className="m-0">{title}</h3>
                  </div>

                  <a
                    className="contacts__link"
                    href={link}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                  >
                    {label}
                  </a>

                </div>
              </div>
            )
          )}

        </div>

        {/* Info */}
        <p className="m-0 text-center ">
          ⏱ Ответ в течение 10–15 минут
          <br />
          Время работы Пн-Вс, с 9:00 до 22:00
        </p>

      </div>
    </div>
  );
}

export default Contacts;
