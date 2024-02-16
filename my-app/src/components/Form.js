import React, {useState} from 'react'

export default function Form(props) {
    const [text, setText]=useState("");
   
  

    const handleChange= (event)=>{
        setText(event.target.value);
    }

    const handleUpClick=()=>{
        setText(text.toUpperCase());
        props.showAlert("Text uppercased", "success");
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("Text lowercased", "success")
    }
    const handleClClick=()=>{
        setText("");
        props.showAlert("Text cleared", "success")
    }
   
  
  return (
<>
<div class="my-3 container" style={{color:props.mode==="light"?"black":"white"}}>
    <div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" style={{backgroundColor:props.mode==="light"?"white":"grey", color:props.mode==="light"?"black":"white"}} value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className={`btn btn-${props.mode==="dark"?"danger":"primary"} mx-2`} onClick={handleUpClick}>Click to UpperCase</button>
  <button className={`btn btn-${props.mode==="dark"?"danger":"primary"} mx-2`} onClick={handleLoClick}>Click to LowerCase</button>
  <button className={`btn btn-${props.mode==="dark"?"danger":"primary"} mx-2`} onClick={handleClClick}>clear</button>
</div>
<div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
    <h1>Your text summary</h1>
    <p> in {text.split(" ").length  -1} words, and {text.length} characters</p>
    
    <p> Reading time {0.008 * text.split(" ").length}</p>

    <h3> Preview </h3>
   <p>{text.length>0 ? text : "Enter some text to review in the box above."}</p>
    

</div>
 
 </>
  )
}
