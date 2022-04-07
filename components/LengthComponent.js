 import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { nameState } from '../atoms/name';
import { sessionState } from '../atoms/session';
import { nameLength } from '../selectors/name';
 
 
 function LengthComponent() {
     const lengthData = useRecoilValue(nameLength);
     const[name]=useRecoilState(nameState);
     const[status]=useRecoilState(sessionState);
   return (
     <div>
       <p>the legth: {lengthData}</p>
       <p>the name: {name} </p>
 {`current status - ${status}`}
     </div>
   )
 }
 
 export default LengthComponent
 