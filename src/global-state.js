import { atom } from "recoil";

export const cityAtom = atom({
  key: "city",
  default: "mumbai",
});

export const loginUserAtom = atom({
  key: "loginUser",
  default: false,
});

export const changingAtom = atom({
  key: "changingAtom",
  default: true,
});
