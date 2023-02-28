import { atom } from "recoil";

export const cityAtom = atom({
  key: "city",
  default: "Mumbai",
});

export const loginUserAtom = atom({
  key: "loginUser",
  default: false,
});

export const changingAtom = atom({
  key: "changingAtom",
  default: true,
});
