import { atom } from "recoil";

export const sessionState = atom(
  {
    key: 'session_atom',
    default: "false"
  }
);