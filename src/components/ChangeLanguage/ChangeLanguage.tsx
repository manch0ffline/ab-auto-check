import { useTranslation } from 'react-i18next';

function ChangeLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div className="dropdown change-language h-100">
      <button
        className="change-language__button dropdown-toggle py-1 px-2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {i18n.language}
      </button>

      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => {
              changeLanguage('ua')
            }}
          >
            Українська
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => {
              changeLanguage('ru')
            }}
          >
            Русский
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => {
             changeLanguage('pl')
            }}
          >
            Polski
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => {
             changeLanguage('eng')
            }}
          >
            English
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ChangeLanguage;
