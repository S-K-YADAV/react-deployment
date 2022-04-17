import React, { useState } from 'react'


export default function TextForm(props) {
const [text, setText] = useState("");

const Uppercase =()=>{
  setText(text.toUpperCase())
 props.ShowAlert("Coverted To UpperCase !","success");
  
}
 const LowerCase = () =>{
   setText(text.toLowerCase());
   props.ShowAlert("Coverted To LowerCase !","success");
 }

const RemoveSpace =()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.ShowAlert("Your extra Space has been removed successfully !","success");
}

const ClearCase=()=>{
  let newText = '';
  setText(newText);
  props.ShowAlert("Your TextBox has been cleard !","success");
}
const Handleonchange=(event)=>{
setText(event.target.value);
}

const CopyHandler=()=>{
 
 navigator.clipboard.writeText(text);
 props.ShowAlert("Your text has been copied to Clipboard","success")
 
}


return (
<>

<div className="ml-2 my-2">
<h2>{props.heading}</h2>
<textarea className="form-control my-2" onChange={Handleonchange} style={{backgroundColor :  props.mode ==="light"?"white":"#065c6d", color:props.mode ==="light"?"black":"white"}} placeholder=" ENTER TEXT" value={text} id="mybox" rows="8"></textarea>
<button className="btn btn-primary " onClick={Uppercase} >UpperCase</button>
<button className="btn btn-primary mx-2 my-2 " onClick={LowerCase} >LowerCase</button>
<button className="btn btn-primary " onClick={RemoveSpace} >Space Remover</button>
<button className="btn btn-primary mx-2 my-2 " onClick={CopyHandler} >Copy Text</button>

<button className="btn btn-danger  my-2 " onClick={ClearCase} >Clear</button>
</div>


<div className="container my-0">
<h3>Your Text Summary</h3>
<p>word/s: {text.split([" "]).length} and Character/s: {text.length } </p>
<p>Time to read : {text.split([" "]).length*0.008} Minutes </p>
<h4>Preview</h4>
<p> {text.length>0?text:"Enter text to preview !!"} </p>
</div>
</>
);
}
