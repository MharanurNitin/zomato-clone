import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import "./navbar.css";
import Avatar from "../../../utils/Avatar";
import Signup from "./Signup";
import { loginUserAtom } from "../../../global-state";
import { useRecoilValue, useSetRecoilState } from "recoil";
function Navbar() {
  const IsUserLogin = useRecoilValue(loginUserAtom);
  const setLoginUser = useSetRecoilState(loginUserAtom);
  const [LoginUserData, setLoggedInUserData] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loginUser")) || "";
    if (data?.email) {
      setLoginUser(true);
      setLoggedInUserData(data);
    } else {
      setLoginUser(false);
    }
  }, []);
  return (
    <div className="Navbar">
      {!IsUserLogin ? (
        <>
          <li>
            <LoginForm />
          </li>
          <li>
            <Signup />
          </li>
        </>
      ) : (
        <div className="profile-container">
          <Avatar />
        </div>
      )}
    </div>
  );
}

export default Navbar;
