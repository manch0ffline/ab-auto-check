import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
// import Prices from './components/Prices/Prices';
import Services from './components/Services/Services';
import ServicesDetails from './components/ServicesDetails/ServicesDetails';
import './i18n';

function goUp() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn') as HTMLElement;

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

function App() {
  return (
    <>
      <div className="app">
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
          <Services />
          <ServicesDetails />
          {/* <Prices /> */}
        </main>
      </div>
    </>
  );
}

export default App;
