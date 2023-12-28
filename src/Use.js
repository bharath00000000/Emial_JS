import React,{useState} from "react"; 

function Use(){
    const [name,setName]=useState('Bharath');
    const [place,setPlace]=useState('Delhi');
    // const handler=()=>{
    //     setName('Rocky');
    //     setPlace('Mumbai');
    //    }kind-2
    return(
        <div>
            <h1>Usestate concept from functional component</h1>
            <h1>{name}</h1>
            <h1>{place}</h1>

            <button onClick={()=>setName('Kohli')}>change the name</button>
            <button onClick={()=>setPlace('Mumbai')}>change the name</button>
            {/* <button onClick={handler}>change the name</button> */}
           {/* kind 2: This is used when multiple cahnges have to done with only one button */}

        </div>
    )
}
export default Use;