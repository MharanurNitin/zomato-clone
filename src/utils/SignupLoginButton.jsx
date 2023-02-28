import React from "react";
import LoginForm from "../components/Home/BannerSection/LoginForm";
import Signup from "../components/Home/BannerSection/Signup";
import { useSetRecoilState } from "recoil";
import { loginUserAtom } from "../global-state";
function SignupLoginButton() {
  return (
    <div className="auth-container">
      <li>
        <LoginForm />
      </li>
      <li>
        <Signup />
      </li>
    </div>
  );
}

export default SignupLoginButton;
