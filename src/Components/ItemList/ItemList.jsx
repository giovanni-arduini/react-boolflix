// lo usiamo per stampare la lista dei film e delle serie tv

// Metteremo le card popolate dai dati

import Card from "../Card/card";
import style from "./ItemList.module.css";

function ItemList({ items, title }) {
  return (
    <section>
      <div className="container">
        <h3 className={style.section_title}>{title}</h3>
      </div>
      <div className="container">
        <ul className="row">
          {items.map((item) => (
            <li className="col-4" key={item.id}>
              <Card item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ItemList;
