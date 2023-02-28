import React, { useEffect, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbCurrentLocation } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "./searchComponent.css";
function SearchComponent() {
  const [locationSearch, setLocationSearch] = useState("Mumbai");
  const [initialSearch, setInitialSearch] = useState("");
  const [foodSearch, setFoodSearch] = useState("");
  const [InputInFocus, setInputInFocus] = useState(false);
  const [LocationSearchResult, setLocationSearchResult] = useState([]);
  const [data, setData] = useState([]);

  async function fetchCities() {
    await fetch(`http://localhost:3000/city/getCities`)
      .then((response) => response.json())
      .then((info) => setData(info));
    // console.log(data);
    let result = data?.filter((el) => {
      return el.name.includes(locationSearch);
    });

    setLocationSearchResult([...new Set(result.map((el) => el.name))]);
  }

  const navigate = useNavigate();
  useEffect(() => {
    fetchCities();
  }, [locationSearch]);
  return (
    <>
      <div className="search_container">
        <p className="locationIcon">
          <HiOutlineLocationMarker />
        </p>
        <input
          type="text"
          placeholder={locationSearch}
          className="searchInput-for-location"
          value={initialSearch}
          onChange={(e) => {
            setLocationSearch(e.target.value);
            setInitialSearch(e.target.value);
          }}
          onFocus={() => {
            setInputInFocus(true);
          }}
          onBlur={() => setTimeout(() => setInputInFocus(false), 200)}
        />
        <p className="down">
          {locationSearch ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </p>
        <h2>|</h2>
        <p className="searchIcon">
          <FiSearch />
        </p>
        <input
          type="text"
          placeholder="Search for restaurant,cuisine or dish"
          className="right-search"
        />
      </div>
      {InputInFocus && (
        <div
          className="search-results-container"
          onClick={() => setInputInFocus(true)}
        >
          {/* <div className="location-detecter">
            <TbCurrentLocation />

            <h3>Detect your current location</h3>
          </div> */}
          <div className="search-results-contain">
            {LocationSearchResult?.map((el) => {
              return (
                <h3
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    navigate(`/${el}/delivery`, { state: LocationSearchResult })
                  }
                >
                  {el}
                </h3>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default SearchComponent;
