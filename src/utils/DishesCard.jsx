import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { changingAtom } from "../global-state";

import "./dishesCard.css";
function DishesCard({ dish }) {
  const { dish_name, image, price, _id, description } = dish;
  const [changingAtoms, setChanginAtom] = useRecoilState(changingAtom);
  // console.log("dish", dish);
  let user_id;
  let login_user = JSON.parse(localStorage.getItem("loginUser"));
  if (login_user) {
    user_id = login_user.id;
    // console.log("local", user.id);
  }

  async function AddToCart(dish) {
    setChanginAtom(Math.floor(Math.random() * 10000));
    if (login_user) {
      let response = await fetch("http://localhost:3000/Cart/AddToCart", {
        method: "POST",
        body: JSON.stringify({
          dish_name,
          image,
          dish_id: _id,
          user_id,
          price,
        }),
        headers: { "Content-Type": "application/json" },
      });
      let result = await response.json();
      // console.log(result);
    } else {
      // toast.success("register first");
      alert("register first");
    }
  }
  return (
    <div className="dish-container flex">
      <div className="dish-details">
        <h1>{dish_name}</h1>
        <h4>Rs - {price}</h4>
        <p>{description}</p>
      </div>
      <div className="dish-image-container">
        <img src={image} alt="" />
        <button onClick={() => AddToCart(dish)}>Add to cart</button>
      </div>
    </div>
  );
}

export default DishesCard;
