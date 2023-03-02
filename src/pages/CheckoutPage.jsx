import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Navbar from "../components/Home/BannerSection/Navbar.jsx";
import { loginUserAtom } from "../global-state.js";
import Avatar from "../utils/Avatar.jsx";
import SignupLoginButton from "../utils/SignupLoginButton.jsx";
import "./checkoutPage.css";
function CheckoutPage() {
  const userIsLogged = useRecoilValue(loginUserAtom);
  const navigate = useNavigate();
  const logo =
    "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";
  return (
    <div className="CheckoutPage-container">
      <div className="CheckoutPage-header">
        <div className="checkout-image-container" onClick={() => navigate("/")}>
          <img src={logo} />
        </div>
        <div className="authentication-container">
          {userIsLogged ? <Avatar /> : <SignupLoginButton />}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
