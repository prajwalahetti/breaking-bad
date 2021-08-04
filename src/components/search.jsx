import { useState } from "react";
import React from "react";

const Search = ({getQuery}) => {
    const [text,setText]=useState('')
    const onChange=(q)=>
    {
        setText(q)
        getQuery(q)
    }
  return (
 
      <section className="search">
        <form action="">
          <input
            type="text"
            className="form-control"
            placeholder="search characters"
            value={text}
            onChange={(e)=>onChange(e.target.value)}
            autoFocus
          />
        </form>
      </section>
   
  );
};

export default Search;
