
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {

  let [add,setAdd]=useState([
    { name: "", age: "" }
  ])
  let [data,setData]=useState([])

  // let arr=Array(add).fill(null)
  function handleAdd(){
   setAdd([...add,{ name: "", age: "" }])
  }

  function handleSubmit(e){
    e.preventDefault()
    const filteredData = add.filter(
      (add) => add.name.trim() !== "" && add.age.trim() !== ""
    );

    setData(filteredData);
    console.log(filteredData);
    
  }

  const handleInputChange = (index, field, value) => {
    const updatedInputs = [...add];
    updatedInputs[index][field] = value;
    setAdd(updatedInputs);
  };

 

  function handleRemove(indexToRemove){
    setAdd(add.filter((_, index) => index !== indexToRemove));
  }


  return (
    <div>
        {/* Do not remove the main div */}
        <form action=""  onSubmit={handleSubmit} >
          {
            add.map((ad,index)=>(
              <div key={index} >
              <input type="text" name="name" id="name" placeholder="Name"  value={ad.value}  onChange={(e)=>{handleInputChange(index,'name',e.target.value)}} />
              <input type="number" name="age" id="age" placeholder="  Age"  value={ad.value}   onChange={(e)=>{handleInputChange(index,'age',e.target.value)}}  />
              {
                index>=0 &&
                (
                  <button  type="button" onClick={()=>{handleRemove(index)}} >Remove</button>
                )
              }
            </div>
            ))
          }
          
          <button type="button"  onClick={handleAdd} >Add More</button>
          <button type="submit"  >Submit</button>
        </form>
    </div>
  )
}

export default App
