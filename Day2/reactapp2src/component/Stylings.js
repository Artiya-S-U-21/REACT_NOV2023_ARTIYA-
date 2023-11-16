const Stylings = ()=>{
    const pstyle = {
       
        color:"darkblue",
        fontSize:"16px",
        
    };
    const dstyle = {
        backgroundColor:"lightblue",
        color:"darkblue",
         padding:"10px",
        border:"1px solid blue",
        borderRadius:"5px",
    };
    return(
        <div style={dstyle}>
            <h1 style={{color:"green"}}>Inline Style in JSX Example.</h1>
            <p style={pstyle}>This is a paragraph with inline styles applied.</p>
        </div>
    );
};

export default Stylings;