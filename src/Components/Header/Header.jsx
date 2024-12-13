// qui potrò mettere la searchbar e il logo
import Filters from "../Filters/Filters";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div>Logo</div>
          <Filters />
        </nav>
      </div>
    </header>
  );
}

export default Header;
