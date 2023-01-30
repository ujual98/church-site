import React from 'react'

function home() {
  return (
    <div className='w-auto vh-100  d-flex justify-content-center align-items-center'>
      <div className=' border bg-image text-center shadow-1 text-white d-flex justify-content-center align-items-center ' style={{backgroundImage:`url("https://images.pexels.com/photos/2598770/pexels-photo-2598770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,width:"700px",height:"auto",backgroundSize:"cover"}} >
        <div className='bg-dark opacity-25 p-5 d-flex justify-content-center align-items-center ' style={{width:"650px",height:"700px"}}>
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

    
    </div>
  )
}

export default home