
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {

  const [alert,setAlert] = useState(null);
  const [mode,setmode] = useState("light");

  const ShowAlert=(message,type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const togglemode=()=>{
    
      if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#065c6d";
      document.body.style.color="white";
      ShowAlert("Dark Mode has been Enabled","success");
    
    }else{
        setmode( 'light');
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        ShowAlert("Light Mode has been Enabled","warning");
      }
     
   
  }
  return (
    <>
  
   <Navbar   mode = {mode} togglemode={togglemode} about="About" title="TextUtills"/>
   <Alert alert={alert} />
   <div className="container">
   <TextForm heading={"Enter text to analyze !!"} mode = {mode} ShowAlert={ShowAlert} />
   
   </div>
  
    </>

  );
}

export default App;
