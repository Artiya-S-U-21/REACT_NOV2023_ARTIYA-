import React,{useState} from "react";
function List()
{
    const[students]=useState([{id:1,name:"john"},{id:2,name:"mike"},{id:3,name:"bhuvana"},{id:4,name:"haran"}]);
    return(
        <div>
            <h1>ListItems</h1>
            <hr></hr>
            <ul style={{listStyleType:"none"}}>
            {students.map((student)=>
                (
                    <li Key={student.id}>
                    <h2>Id:{student.id}</h2>
                    <h2>name:{student.name}</h2></li>
                ))}
               
            </ul>
        

        </div>
    )
}
export default List;