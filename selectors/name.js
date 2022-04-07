import { selector } from "recoil";
import { nameState } from "../atoms/name";

export const nameLength = selector(
    {
        key:'lenght_selector',
        get:({get})=>{
            const name = get(nameState);
            return name.length;
        }
    }
)