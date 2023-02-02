import React from 'react'

function New_password() {
  return (
    <div className='container'>
        <div className='w-auto vh-100 container d-flex justify-content-center align-items-center'>
            <div className='w-50 h-50 p-5 border'>
<h2>Create New Password</h2>
            </div>
            <div className='w-50 h-50  p-2 border'>
            <form>
  <div class="form-group p-2">
    <label for="formGroupExampleInput">New Password</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
  </div>
  <div class="form-group p-2">
    <label for="formGroupExampleInput2">Confirm Password</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div className='form-group p-2'>
  <button type="button" class="btn btn-outline-secondary">Submit</button>
  </div>
</form>
            </div>
        </div>
    </div>
  )
}

export default New_password