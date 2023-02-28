import React from 'react'
import "./collections.css";
import { AiFillCaretRight } from "react-icons/ai";
import CollectionCard from './CollectionCard';
function Collections() {
  return (
    <div className="collections_container">
      <h1>Collections</h1>
      <div className="collection_subtitle">
        <h2>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Pune, based on trends
        </h2>
        <h3 className="link">
          all Collections in Mumbai{" "}
          <span>
            <AiFillCaretRight />
          </span>
        </h3>
      </div>
      <div className="collection-cards">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </div>
  );
}

export default Collections