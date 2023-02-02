import React from 'react'

function home() {
  return (
    <div className=' w-auto vh-100  d-flex justify-content-center align-items-center'>
      <div className='  ' style={{ color:"#378486", width: "700px", height: "auto", }} >
        <div className=' bg- p-5  ' style={{ width: "650px", height: "650px" }}>
        <center>  <h2><u>Todays Meals</u></h2></center>

          <div className='border container d-flex justify-content-center align-items-center' style={{width:"25rem",height:"8rem"}}>
            <label className="form-check-label me-3"> Breakfast</label>
            <input class="form-check-input"
              type="checkbox" id="checkbox1" name="option1" value="good" />
          </div>
          <div className='border container d-flex justify-content-center align-items-center' style={{width:"25rem",height:"8rem"}}>
          <label className="form-check-label me-3"> Lunch</label>
            <input className="form-check-input "
              type="checkbox" id="checkbox1" name="option1" value="good"  />
          </div>
          <div className='border container d-flex justify-content-center align-items-center' style={{width:"25rem",height:"8rem"}}>
          <label className="form-check-label me-3"> Dinner</label>
            <input class="form-check-input"
              type="checkbox" id="checkbox1" name="option1" value="good"/>
          </div>
          <div className=' container d-flex justify-content-center align-items-center mt-3'>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{backgroundColor:"#378486"}}>
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
      <div className='container ' style={{width:"auto",}} >
         <table class="table table-striped table-secondary  table-bordered h-50 w-100 " >
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
        <button type="button" class="btn btn-primary" style={{backgroundColor:"#378486"}}>Confirm</button>
      </div>
    </div>
  </div>
</div>
          </div>
          <button type="button" class="btn btn-outline-secondary">Preview</button>
          <button type="button" class="btn btn-outline-secondary ">Preview Listing</button>
        </div>

      </div>


    </div>
  )
}

export default home