import React from 'react';
import './index.css'

const ToDoLists =(props) =>{
return (
    <>
    <li> <i onClick={ () =>{
            props.onSelect(props.id);

            }
    }
    
        >x</i>
        {props.text}</li>
    </>
     )

};

export default ToDoLists;