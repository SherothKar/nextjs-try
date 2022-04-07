import { selector } from "recoil";
import { sessionState } from "../atoms/session";
  
export const sessionStatus = selector(
    {
        key:'lenght_selector',
        get:({get})=>{
            const session_status = get(sessionState);
            return session_status;
        }
    }
)