import {useState} from 'react';
import './App.css';
import axios from 'axios'
function App() {
  const [formVal, setFormVal] = useState([{name:'', movie:''}])
  const addRow = () => {
    setFormVal([...formVal, {name:'', movie:''}])
  }
  const onRemove=(i) => {
    const newForm = [...formVal]
    newForm.splice(i, 1)
    setFormVal(newForm)
  }
  const onHandle = (e, i) => {
    let newForm = [...formVal]

    if(e.target.type === "file"){
        const reader = new FileReader()
        newForm[i][e.target.name] = reader.result

        reader.onload = () => {
            if(reader.readyState === 2) {
                newForm[i][e.target.name] = reader.result
                // setImages(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    newForm[i][e.target.name]= e.target.value
    setFormVal(newForm)
  }

  const onSubmit = async (e) => {
    
    const formData = new FormData();
    e.preventDefault();

    formVal.forEach((image) => {
        formData.append("images", image.movie);
        formData.append("name", image.name);
      });
    await axios.post("http://localhost:4000/movies", formData)
    

  }
  return (
    <div className="App">
      <div style={{width:'60%', margin:'20px auto', }}>
        <form onSubmit={onSubmit}>
          {formVal.map((item, i)=> (
            <div>
              <div style={{padding:'10px', margin:'10px', diplay:'flex', flexDirection:'row'}}>
                <label>Name</label>
                <input type="text" name="name" value={item.name || ""} onChange={(e)=> onHandle(e, i)}/>
              <label style={{marginTop:'50px'}}>Email</label>
              <input type="file" name="movie" value={item.email || ""} onChange={(e)=>onHandle(e, i)}/>
              {
                i == 0 ? "" :  <button onClick={()=>onRemove(i)}>Remove</button>
              }
              </div>
             
            </div>

          ))}
          <div style={{marginTop:'20px'}}>
                <button onClick={addRow}>Add Row</button>
              <button type="submit" style={{marginLeft:'20px'}}>Submit</button>
           </div>
        </form>
      </div>
    </div>
  );
}

export default App;



// import React, { useState } from "react";


// function Addmoreinput() {
//   const [inputList, setinputList]= useState([{firstName:'', lastName:''}]);

//   const handleinputchange=(e, index)=>{
//     console.log(e.target.files[0], index)
//     const {name, value}= e.target;
//     const list= [...inputList];
//     console.log(value)
//     list[index][name]= value;
//     setinputList(list);

//   }
 
//   const handleremove= index=>{
//     const list=[...inputList];
//     list.splice(index,1);
//     setinputList(list);
//   }

//   const handleaddclick=()=>{ 
//     setinputList([...inputList, { firstName:'', lastName:''}]);
//   }
//   return (
//     <div className="content">
//      <div className="row">
//        <div className="col-sm-12">
//          <h5 className="mt-3 mb-4 fw-bold">Dynamically add/remove inputs fields reactjs </h5>
           
//             { 
//             inputList.map( (x,i)=>{
//               return(
//               <div className="row mb-3">
//                  <div class="form-group col-md-4">
//                  <label >First Name</label>
//                   <input type="text"  name="firstName" class="form-control"  placeholder="Enter First Name" onChange={ e=>handleinputchange(e,i)} />
//                </div>
//                <div class="form-group col-md-4">
//                <label >Last Name</label>
//                   <input type="file"  name="lastName" class="form-control"   placeholder="Enter Last Name" onChange={ e=>handleinputchange(e,i) }/>
//                </div>
//                <div class="form-group col-md-2 mt-4">
//                {
//                   inputList.length!==1 &&
//                   <button  className="btn btn-danger mx-1" onClick={()=> handleremove(i)}>Remove</button>
//                }
//                { inputList.length-1===i &&
//                <button  className="btn btn-success" onClick={ handleaddclick}>Add More</button>
//                }
//                </div>
//             </div>
//               );
//              } )} 

               
//        </div>
//      </div>
//     </div>
//   );
// }
// export default Addmoreinput;


