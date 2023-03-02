import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import "./navbar.css";
import Avatar from "../../../utils/Avatar";
import Signup from "./Signup";
import { loginUserAtom } from "../../../global-state";
import { useRecoilValue, useSetRecoilState } from "recoil";
function Navbar() {
  const IsUserLogin = useRecoilValue(loginUserAtom);
  // const setLoginUser = useRecoilValue(loginUserAtom);
  const [LoginUserData, setLoggedInUserData] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loginUser")) || "";
    if (data?.email) {
      // setLoginUser(true);
      setLoggedInUserData(data);
    }
  }, []);
  return (
    <div className="Navbar">
      {IsUserLogin ? (
        <div className="profile-container">
          <Avatar />
        </div>
      ) : (
        <>
          <li>
            <LoginForm />
          </li>
          <li>
            <Signup />
          </li>
        </>
      )}
    </div>
  );
}

export default Navbar;
