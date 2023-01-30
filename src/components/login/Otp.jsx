import React from 'react'

function Otp() {
    return (
        <div>
            <div className='d-flex  justify-content-center align-items-center ' style={{ width: "auto", height: "100vh", backgroundColor: "#f5f5f5" }}>
                <center><h2>Enter OTP</h2></center>
                 <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" className='p-2' />
                 <br /><center><button type="submit" class="btn btn-primary" style={{backgroundColor:'#378486'}}>Submit</button> </center>

            </div>
        </div>
    )
}

export default Otp