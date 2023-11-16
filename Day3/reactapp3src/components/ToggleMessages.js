import React,{useState} from "react";
import "../App.css";

function ToggleMessages()
{
    const[showMsg,setShowMsg]= useState(false);
    const toggleMsg =()=>{
        setShowMsg(!showMsg);
    };

    return(
        <div>
            <h1>DASHBOARD</h1>
            <hr></hr>
            <button onClick={toggleMsg}>
                {showMsg ? "Hide Message" : "Show Message"}
            </button>
            {showMsg && <p>Hi ! How are You!!!</p>}
        </div>
    );
}

export default ToggleMessages;