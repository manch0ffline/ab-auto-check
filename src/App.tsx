import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Prices from './components/Prices/Prices';
import Services from './components/Services/Services';
import './i18n';

function App() {
  return (
    <>
      <div className="app">
        <Menu />
        <Header />
        <main className="app__main d-flex flex-column gap-5">
          <a href="#" className="app__go-up">
            <div className='icon icon--go-up'></div>
          </a>

          <div className="app__line"></div>
          <Services />
          <Prices />
        </main>
      </div>
    </>
  );
}

export default App;
