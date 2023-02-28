import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "./RestaurantDescription.css";
function RestaurantDescription({ details }) {
  // const [Dishes, setDishes] = useState([]);
  // function findDishes(resto_id) {
  //   fetch(`http://localhost:3000/Dishes/getDishesofRestaurant/${resto_id}`)
  //     .then((response) => response.json())
  //     .then((data) => setDishes(data));
  // }
  // useEffect(() => {
  //   findDishes(details._id);
  // }, [details._id]);
  return (
    <>
      {/* {console.log("this is total dishes", Dishes)} */}
      <div className="RestaurantName w-100 flex space-between">
        <div className="NameandRating flex align-center space-between width-100">
          <h1 className="resto-Name">{details?.name}</h1>
          <div className="total-ratings flex gap-1 align-center">
            <p className="rating">
              {details?.rating}
              <AiFillStar style={{ color: "white" }} />
            </p>
            <div className="">
              <h4>3,400</h4>
              <p className="bb-dashed">Delivery Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100">
        <h4>{details["food"].join()}</h4>
      </div>
      <div className="" style={{ borderBottom: "1px solid #ddd" }}>
        {details["location"]}
      </div>
    </>
  );
}

export default RestaurantDescription;
