//  gallery.jsx

import Card from "./card";
import data from "../../data/data.json";

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