import React from 'react'
import { useRecoilState } from 'recoil'
import { nameState } from '../atoms/name';
import { sessionState } from '../atoms/session';

function InputComponent() {
    const[name,setName]=useRecoilState(nameState);
let handleName =(e)=>{
    // setName(e.target.value);
    setStatus(e.target.value);
}
const[status,setStatus]=useRecoilState(sessionState);
  return (
    <div>
      <input
       type="text"
      value={status}
      onChange={handleName}
      />
    </div>
  )
}

export default InputComponent
