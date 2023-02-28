import React from 'react' 
import "./collectionCard.css"
import { AiFillCaretRight } from "react-icons/ai";
function CollectionCard() {
    const background =
      "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674839786.jpg?output-format=webp";
  return (
    <div
      className="card-container"
      style={{
        backgroundImage:
          `url(${background})`,
      }}
    >
        <h2>13 Best Bars & Pub</h2>
        <h3>13 Places <AiFillCaretRight/> </h3>
    </div>
  );
}

export default CollectionCard