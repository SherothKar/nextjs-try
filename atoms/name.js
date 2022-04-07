import { atom } from "recoil";

export const nameState = atom(
  {
    key: 'name_atom',
    default: ""
  }
);