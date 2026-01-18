import Navigation from '../Navigation/Navigation';
import TopBar from '../TopBar/TopBar';

function Menu() {
  return (
    <aside className="menu w-100" id="menu">
      <div className="container h-100">
        <TopBar isMenu={true}/>
        <Navigation/>
      </div>
    </aside>
  );
}

export default Menu;
