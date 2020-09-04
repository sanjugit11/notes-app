import React, { useState } from 'react';
import './index.css';
import ToDoLists from './ToDoLists';

const App = () => {

const[inputList,setInputList] =useState();
const[showList,setshowList]= useState([]);

const itemEvent = (event)=>{
       setInputList(event.target.value);
};

const listofItems = () =>{
   setshowList((olditems) => {
     return [...olditems,inputList];
   });
   setInputList('');
};
const deleteItems = (id) =>{
  console.log('deleted');

  setshowList((olditems)=>{
    return olditems.filter((arrElem, index) =>{
        return index !== id;
    })
  })
}

return(
  <>
  <div className='main-div'> 
    <div className ='center-div'>
       <br />
       <h1> To DO List</h1>
       <br/>
       <input type= 'text' placeholder='add an item' 
       onChange={itemEvent} value={inputList}
       />
       <button onClick={listofItems}> + </button>
       
       <ol>
        {showList.map( (itemVal,index) =>{
          return <ToDoLists
          key={index}
          id={index}
           text={itemVal} 
           onSelect={deleteItems}
           />;
                
          
        })}


       </ol>
    </div>
    
  </div>
  </>
);
};

export default App;