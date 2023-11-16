import "./StateProps.css";
import React,{useState} from "react";

function StateProps()
{
    const[name,setName]=useState("Kaioken");
    const[count,setCount] = useState(0);
    const transformationHandler =() =>{
    let value=count;
    setCount(++value);
    if(count==3)
    {
    if(name==="Kaioken")
        setName("Super Saiyan");
    else
       setName("Kaioken");
    setCount(0);
    }
    };

    return(
        <div>
            <h1>{name}</h1>
            <button onClick = {transformationHandler}>Toggle</button>
        </div>
    );
};

export default StateProps;