import { atom } from "recoil";

const loginUser = JSON.parse(localStorage.getItem("loginUser")) || false;
export const cityAtom = atom({
  key: "city",
  default: "mumbai",
});

export const loginUserAtom = atom({
  key: "loginUser",
  default: loginUser,
});

export const changingAtom = atom({
  key: "changingAtom",
  default: 1,
});
