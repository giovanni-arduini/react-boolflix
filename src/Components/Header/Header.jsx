// qui potrò mettere la searchbar e il logo
import Filters from "../Filters/Filters";
import style from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className="">
        <nav className={style.nav}>
          <div className={style.logo}>BOOLFLIX</div>
          <Filters />
        </nav>
      </div>
    </header>
  );
}

export default Header;
