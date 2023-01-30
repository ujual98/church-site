import React from 'react'
import './login.scss'
import Pass from './passwordReset'
import Otp from './Otp'
import Home from '../home/home'


function Login() {
    return (
<div>
<div className='  d-flex  justify-content-center align-items-center ' style={{width: "auto",height:"100vh",backgroundColor:"#f5f5f5"  }}>
 <div className=' p-5 d-flex  justify-content-center align-items-center  ' style={{width: "450px",height:"650px",backgroundColor:"#ead4c4"}} >
    <img src="https://cdn.dribbble.com/users/205777/screenshots/10549044/media/f16e9c9f2ead4f85cf35575ad68a7d2a.jpg?compress=1&resize=1000x750&vertical=top" alt="" className='p-1  ps-5' style={{width: "450px",height:"auto",}}/>
 </div>
 <div className=' p-5 d-flex  justify-content-center align-items-center  ' style={{width: "450px",height:"650px",backgroundColor:"#ead4c4", color:'#378486'}}>
     <form className='p-2'>
  <div class="mb-3" >
    <center><h3>Login</h3></center>
    <label for="exampleInputEmail1" class="form-label">User ID</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your ID with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div>
    <a href="" style={{color:'#378486'}}>Forgot password?</a><br />  
  </div>
  <br /><center><button type="submit" class="btn btn-primary" style={{backgroundColor:'#378486'}}>Submit</button> </center>
</form>
     </div>
     </div>
  
</div>
    )
}

export default Login