import React from 'react';
import Child from './Child';

const Parent = (props) => {
    return (
    <div>
        <Child dowhatever = {props.changetheworldevent} title = {props.title}/>
        <Child dowhatever = {props.bethesameevent} title = {props.title}/>
    </div>
    )
  }
  

export default Parent;