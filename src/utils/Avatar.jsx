import React from "react";
import { useSetRecoilState } from "recoil";
import { loginUserAtom } from "../global-state";
import "./Avatar.css";

function Avatar({ image }) {
  const setLoginUser = useSetRecoilState(loginUserAtom);
  function handleLogout() {
    localStorage.removeItem("loginUser");
    setLoginUser(false);
  }
  const url =
    "https://imgs.search.brave.com/5niyFZqChDLlFfquNgPGEGDfUsNLewhj3rF5zm0-gj4/rs:fit:512:512:1/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMy9Cb3kt/QXZhdGFyLVBORy1U/cmFuc3BhcmVudC1J/bWFnZS5wbmc";
  return (
    <div className="Avatar-container">
      <img src={image || url} alt="" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Avatar;
