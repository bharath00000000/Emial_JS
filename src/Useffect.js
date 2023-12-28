import React, { useEffect, useState } from "react";
function Useffect(){
    const [count,setCount]=useState(0);
    // useEffect(()=>{
    //     console.log({count});
    // },[count])
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1);
        },5000);
    },[count])
    
    return(
        <div>
            <h1>{count}</h1>
        {/* <button onClick={()=>setCount(count+1)}>Increase</button> */}
        </div>
    )
}
export default Useffect;