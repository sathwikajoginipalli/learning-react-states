import React from 'react';

const Child = (props) => {
    return (
    <div>
        <h1>grandparent to child props example</h1>
        <button onClick={props.dowhatever}>{props.title}</button>
    </div>
    
    )
  }
  

export default Child;

