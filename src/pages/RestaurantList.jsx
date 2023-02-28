import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Avatar from "../utils/Avatar";
import SearchComponent from "../utils/SearchComponent";
import SignupLoginButton from "../utils/SignupLoginButton";
import { useSetRecoilState } from "recoil";
import { loginUserAtom } from "../global-state";

import "./restaurantList.css";
import { useParams } from "react-router-dom";
function RestaurantList() {
  const [userIsLogged, setIsUserLogged] = useState(false);
  const city = useParams();
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("loginUser"));
    if (data?.email) {
      setIsUserLogged(true);
    }
  }, []);
  const logo =
    "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";
  return (
    <div className="Restaurant-container-page">
      <div className="sub-container">
        <div className="header-search">
          <div className="image-container">
            <img src={logo} />
          </div>
          <div className="search-input-containter">
            <SearchComponent />
          </div>
          <div className="authentication-container">
            {userIsLogged ? <Avatar /> : <SignupLoginButton />}
          </div>
        </div>
      </div>
      {/* //top search section end */}
      {!city.restaurantName && (
        <div className="services-type-container">
          <div className="sub-container">
            <div className="order-online active">
              <div className="Image-container">
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
                  alt=""
                />
              </div>
              <h3>Delivery</h3>
            </div>
            <div className="dining-out">
              <div className="Image-container">
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                  alt=""
                />
              </div>
              <h3>Dining Out</h3>
            </div>
            <div className="NightLife">
              <div className="Image-container">
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                  alt=""
                />
              </div>
              <h3>NightLife</h3>
            </div>
          </div>
        </div>
      )}
      {/* type of services /filter section completed */}
      <Outlet />
    </div> //Restaurant-container-page
  );
}

export default RestaurantList;
