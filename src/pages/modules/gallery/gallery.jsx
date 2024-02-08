//  gallery.jsx

import Card from "../card/card";
import data from "../../../data/data.json";
import "./gallery.scss";

function Gallery() {
  return (
    <div className="container">
      {data.map((item) => (
        <Card key={item.id} title={item.title} cover={item.cover} />
      ))}
    </div>
  );
}

export default Gallery;
