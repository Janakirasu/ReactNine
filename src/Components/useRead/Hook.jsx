/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState } from "react";
import ReducerAction from "./RedAction";
const Hook = () => {
  const [state, dispntch] = useReducer(ReducerAction, 0);
const [value,setValue]=useState(0)
useEffect(()=>{

},[value])
  return (

    <div className="Maths py-5" > 
    <h1><span className="head bg-secondary-subtle  py-3 m-5">UseReducer</span></h1>
     <ul className="Star py-3 fs-1 text-warning-emphasis m-5 " >{state}</ul>
      <button className="btn btn-primary py-3 m-2" 
        onClick={() => {
          dispntch({ type: "ADD" });
        }}
      >
        Add+2
      </button>
      <button className="btn btn-danger py-3 m-2 "
        onClick={() => {
          dispntch({ type: "SUB" });
        }}
      >
        Sub-2
      </button>

      <button className="btn btn-success py-3 m-2"
        onClick={() => {
          dispntch({ type: "MULT" });
        }}
      >
        Mult*2
      </button>

      <button className="btn btn-warning py-3 m-2"
        onClick={() => {
          dispntch({ type: "DIV" });
        }}
      >
        DIV/2
      </button>
<button className="btn btn-dark py-3 m-2" onClick={()=>{setValue(value,0)}}> Reset</button>

    </div>


  );
};

export default Hook;
