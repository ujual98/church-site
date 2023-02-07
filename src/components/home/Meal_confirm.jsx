import React from 'react'

function Meal_confirm() {
  return (
    <div className='container p-5    '  >
         <table class="table table-bordered " >
  <thead>
    <tr>
      <th scope="col">Meal timing</th>
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
  <button type="button" className="btn btn-secondary mt-3 w-25" >Confirm</button>           
<button type="button" className="btn btn-secondary mt-3 w-25 ms-5">Edit</button>

</table>
    </div>
  )
}

export default Meal_confirm