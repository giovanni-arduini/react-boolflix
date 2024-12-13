// lo usiamo per stampare la lista dei film e delle serie tv

// Metteremo le card popolate dai dati

import Card from "../Card/card";

function ItemList(items = [], title) {
  return (
    <section>
      <div className="container">
        <h2>{title}</h2>
      </div>
      <div className="container">
        <ul className="grid">
          {items.map((item) => (
            <li kay={item.id}>
              <Card item={item} />
            </li>
          ))}
        </ul>
        ;
      </div>
    </section>
  );
}

export default ItemList;
