import React from 'react'

function home() {
  return (
    <div style={{ width: "auto", height: "100vh", backgroundColor:"#378486" }}>
      <div className='d-flex  justify-content-center align-items-center ' style={{ width: "auto", height: "500px"}}>

        <div className=' w-50 d-flex  justify-content-center align-items-center flex-column mt-5  ' style={{ height: "500px", color:'black' }}>
          <h2>Daily Meals</h2><br />
          <label className="form-check-label p-2  " for="flexCheckDefault">
            Breakfast
          </label>
          <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label p-2" for="flexCheckDefault">
            Lunch
          </label>
          <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label p-2" for="flexCheckDefault">
            Dinner
          </label>
          <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
          <button type="button" className="btn btn-secondary mt-3 w-25" >Submit</button>


        </div>
      </div>
      <div className='d-flex justify-content-around  mt-5 ms-5  ' style={{ height: "500px",width:"auto" }}>
        
        <div><button type="button" className="btn btn-secondary" style={{ height: "50px",width:"300px"}} >Daily meals preview</button></div>
        <div><button type="button" className="btn btn-secondary" style={{ height: "50px",width:"300px" }} >Daily meals Listing</button></div>
      </div>
    </div>
  )
}

export default home