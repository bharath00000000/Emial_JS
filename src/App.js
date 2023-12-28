// import React from "react";
// class App extends React.Component{
//   constructor (props){
//     super(props);
//     this.state={
//       name:'Virat',
//       place:'Delhi',
//       DOB: '5th November',
//       No: 18
    
//     }
   
//   }
//   changeHandler=()=>{
//     this.setState({name:'King Kohli'});
//   }
 
//   render(){
//     return(
//       <div>
//         <h1>Set state concept in class component</h1>
//         <h1>{this.state.name}</h1>
        
//         <button onClick={this.changeHandler} >Set State concept</button>
       
//       </div>
//     )
//   }
// }
// export default App;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const App=()=>{
  const form=useRef(0);
  const sendEmail=(e)=>{
    e.preventDefault();
    console.log('submitted successfully')
    emailjs.sendForm('service_l11vqze','template_jaystoq',form.current,'I-s1qZZ5g_w8I0qOi')
    // emailjs.sendForm('service_id','template_id',form.current,'public key')
    .then((result)=>{
      console.log(result.text)
    },
    (error)=>{
    console.log(error.text);
    })
  }

  return(
    <div>
      <center>
        <form ref={form} onSubmit={sendEmail}>
          <label>Username</label><br/>
          <input type="text" name="user_name"/><br/>
          <label>Email</label><br/>
          <input type="text" name="user_email"/><br/>
          <label>Message</label><br/>
          <textarea name="message"/> <br/>
          <input type="submit" value={'send'}/>
        </form>
      </center>
    </div>
  )
}
export default App;