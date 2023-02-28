import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RestaurantDescription from "../components/RestaurantDescription";
import DishesCard from "../utils/DishesCard";
import ImageGallery from "../utils/ImageGallery";
import { changingAtom } from "../global-state";
import "./ClickedSingleRestaurantDetail.css";
import { useRecoilValue } from "recoil";
function ClickedSingleRestaurantDetail() {
  const [Dishes, setDishes] = useState([]);
  // const [userId, setUserId] = useState("");
  const changingAtoms = useRecoilValue(changingAtom);
  const [getcartDishes, setCartDishes] = useState([]);
  const { state } = useLocation();

  function findDishes(resto_id) {
    fetch(`http://localhost:3000/Dishes/getDishesofRestaurant/${resto_id}`)
      .then((response) => response.json())
      .then((data) => setDishes(data));
  }
  useEffect(() => {
    findDishes(state._id);
  }, [state._id]);

  function CartDishes(userId) {
    fetch(`http://localhost:3000/Cart/showCart/${userId}`)
      .then((response) => response.json())
      .then((data) => setCartDishes(data));
  }
  useEffect(() => {
    const login_user = JSON.parse(localStorage.getItem("loginUser"));

    CartDishes(login_user?.id);
  }, [changingAtoms]);
  return (
    <>
      <div className="width-100">
        <div className="width-85">
          <ImageGallery images={state.images} />
          <RestaurantDescription details={state} />
          <div className="cartAnddishes-container">
            <div className="dishes">
              {Dishes?.map((dish) => {
                return <DishesCard dish={dish} />;
              })}
            </div>

            <div className="cart">
              {getcartDishes.length > 0 ? (
                getcartDishes?.map((el) => (
                  <div className="flex one_cart">
                    <div className="cart_image-container">
                      <img src={el.image} />
                    </div>
                    <div className="cart_image_description">
                      <p>{el.dish_name}</p>
                      <p>{el.price} Rs</p>
                    </div>
                  </div>
                ))
              ) : (
                <h1>Nothing in cart</h1>
              )}
              {getcartDishes.length > 0 && <button>CheckOut</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClickedSingleRestaurantDetail;
