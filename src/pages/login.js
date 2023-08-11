
import React from 'react'; 
import "./login.css";


const Login = () => {
  return (
  
    <div>
   <div class='bold-line'></div>
<div class='container'>
    
  <div class='window'>
    <div class='overlay'></div>
    <div class='content'>
      <div class='welcome'>Login</div>
      <div class='subtitle'></div>
      <div class='input-fields'>
       
        <input type='email' placeholder='Email' class='input-line full-width'></input>
        <input type='password' placeholder='Password' class='input-line full-width'></input>

      </div>
      <div class='spacing'><span class='highlight'></span></div>
      <div><button class='ghost-round full-width'>Login Account</button></div>
    </div>
  </div>
</div>
<img className='imea' src='https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='#' />
  </div>

  );
};

export default Login;    
  

