import React from 'react'

function home() {
  return (
    <div className=' w-auto vh-100'>
      <div className=' w-auto vh-75 mt-5 p-5 container border d-flex justify-content-center align-items-center ' style={{ color:'#ffffff',backgroundColor:"#00a388"}}>
      <div className='w-50 h-75  d-flex justify-content-center align-items-center border-end '>
<img src="https://i.pinimg.com/564x/5b/dd/5a/5bdd5a909498f7f68f469e3afabcc33f.jpg" className='mb-5 ' style={{height:"500px",width:"auto",padding:"1rem"}} alt="" />
      </div>
      <div className='w-50 h-75 p-5 d-flex-column    justify-content-center align-items-center '>
      <center>  <h2><u>What's for u today</u></h2></center>

<div className=' container d-flex justify-content-center align-items-center' style={{ width: "25rem", height: "8rem",}}>
  <label className="form-check-label me-3"> Breakfast</label>
  <input class="form-check-input"
    type="checkbox" id="checkbox1" name="option1" value="good" />
</div>
<div className=' container d-flex justify-content-center align-items-center' style={{ width: "25rem", height: "8rem", }}>
  <label className="form-check-label me-3"> Lunch</label>
  <input className="form-check-input "
    type="checkbox" id="checkbox1" name="option1" value="good" />
</div>
<div className=' container d-flex justify-content-center align-items-center' style={{ width: "25rem", height: "8rem",}}>
  <label className="form-check-label me-3"> Dinner</label>
  <input class="form-check-input"
    type="checkbox" id="checkbox1" name="option1" value="good" />
</div>
<div className=' container d-flex justify-content-center align-items-center mt-3'>
  <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ backgroundColor: "#5d3a15" }}>
    Submit
  </button>


  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Meal confirmation</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div className='container ' style={{ width: "auto", }} >
            <table class="table  table-success  table-bordered h-50 w-100 " >
              <thead>
                <tr>
                  <th scope="col">Meal Timing</th>
                  <th scope="col">Confirmation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Breakfast</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Lunch</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Dinner</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Edit</button>
          <button type="button" class="btn btn-primary" style={{ backgroundColor: "#378486" }}>Confirm</button>
        </div>
      </div>
    </div>
  </div>
</div >

      </div>
    </div>
    <div className='d-flex justify-content-center align-items-center m-3' >
      <div className='w-50 h-25  d-flex justify-content-center align-items-center ' >
    <button type="button" class="btn btn-outline-success me-3">Daily Meal Selection Preview</button>
    <button type="button" class="btn btn-outline-success align-self-center">Daily Meal Slection Listing</button>
    </div>
    </div>
    </div>
  )
}

export default home