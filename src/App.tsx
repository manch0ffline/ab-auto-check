import { useEffect, useState } from 'react';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Services from './components/Services/Services';
import ServicesDetails from './components/ServicesDetails/ServicesDetails';
import './i18n';
// @ts-ignore
import AOS from 'aos';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicyю';
import goUp from './utils/goUp';
import { AutoSelectionSlider } from './components/Slider/AutoSelectionSlider';

function App() {
  const [activeDetail, setActiveDetail] = useState(0);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // скорость анимации
      easing: 'ease', // тип перехода
      once: true,
    });
  }, []);

  return (
    <>
      <div className="app">
        {!privacyPolicy && (
          <>
            <Menu />
            <Header />
            <main className="app__main d-flex flex-column gap-5">
              <a href="#" className="app__go-up">
                <div
                  className="icon icon--go-up "
                  id="scrollToTopBtn"
                  onClick={() => goUp()}
                ></div>
              </a>

              <div className="app__line"></div>
              <Services setActiveDetail={setActiveDetail} />
              <AutoSelectionSlider />
              <ServicesDetails activeDetail={activeDetail} />
              <Contacts />
              <Footer setPrivacyPolicy={setPrivacyPolicy} />
            </main>
          </>
        )}
        {privacyPolicy && <PrivacyPolicy setPrivacyPolicy={setPrivacyPolicy} />}
      </div>
    </>
  );
}

export default App;
