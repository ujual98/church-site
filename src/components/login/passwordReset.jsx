import React from 'react'

function passwordReset() {
    return (
        <div className='d-flex  justify-content-center align-items-center ' style={{width: "auto",height:"100vh",backgroundColor:"#f5f5f5"  }}>
            <div  className=' container  d-flex  justify-content-center align-items-center border ' style={{width: "400px",height:"600px",color:'#378486'}}>
                <form >
                    <h3>Password Reset</h3>
                    <div class="form-group">
                        <label for="exampleInputEmail1"> Employee Id</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="user id" />
                      
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Employee Mail</label>
                        <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Password" /><br />
                    </div>
                    <center><button type="submit" class="btn btn-primary">Submit</button></center>
                </form>
            </div>
        </div>
    )
}

export default passwordReset