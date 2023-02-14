import React from 'react'

function home() {
  return (
    <div className='container p-md-4 p-5'>
      <h2 class="text-uppercase">
        Choose your meals
      </h2>
      <h6 class="text-uppercase text-muted">
        Daily Meal Chart
      </h6>
      <button class="btn btn-sm btn-secondary">
        Back to My Meals
      </button>
      <hr />
      <div class="py-2">
        <p class="border-start ps-3 ">
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </small>
        </p>
        <div class="row mt-5">
          <div class="col-12 col-md-6">
            <div class="shadow rounded p-4 ">
              <h5>My Selection On 16-01-2023</h5>
              <p class="text-muted">
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </small>
              </p>
              {/* <div class="alert alert-success" role="alert">
                        <small><b>Whoo!</b> Your selection has been successfully updated.</small>
                    </div> */}
              <form action='http://192.168.10.53/tserver/mealselect.php' method='post' encType='multipart/form-data'>
                <input type="text" hidden='true' name='employee_name' value="Rishi (1001)"/>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="breakfast" id="breakfast_checkbox" />
                  <label class="form-check-label" for="breakfast_checkbox">
                    Morning Breakfast
                  </label>
                </div>
                <div id="emailHelp" class="form-text border-bottom pb-1 mt-0">
                  <small>Breakfast will only available between 07:30 AM to 08:45 AM.</small>
                </div>
                <div class="form-check mt-2">
                  <input class="form-check-input" type="checkbox" name="lunch" id="lunch_checkbox" />
                  <label class="form-check-label" for="lunch_checkbox">
                    Noon Lunch
                  </label>
                </div>
                <div id="emailHelp" class="form-text border-bottom pb-1 mt-0">
                  <small>Lunch will only available between 12:30 PM to 02:30 PM.</small>
                </div>
                <div class="form-check mt-2 mb-0">
                  <input class="form-check-input" type="checkbox" name="dinner" id="dinner_checkbox" />
                  <label class="form-check-label" for="dinner_checkbox">
                    Evening Dinner
                  </label>
                </div>
                <div id="emailHelp" class="form-text border-bottom pb-1 mt-0">
                  <small>Dinner will only available between 04:30 PM to 08:30 PM.</small>
                </div>
                {/* <div class="alert alert-danger mt-4" role="alert">
                            <small><b>Oops!</b> You can no longer make changes to your meal plan for today.</small>
                        </div> */}

                <button type="submit" class="btn btn-primary btn-sm mt-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Save Meal Preferences
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
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
                        </table>

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Edit</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>

              </form>
            </div>
            <br />
            <div className=' shadow rounded p-4 '>
<h5 className='ms-3 p-1'>Daily Meal Plan-Log</h5>
              <small><p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque earum aliquam distinctio quam accusantium illum voluptatibus alias quidem tenetur quas iure, quod corrupti. Ipsum autem voluptatem odit? Quod, laudantium.</p></small>
              <div className=' mb-1'> 
              <button type="button" className="btn btn-secondary btn-sm mt-2 " >
                Daily Meals Log
              </button>
              </div>
              <div className='d-flex align-self-center   mb-1 '>
                <button type="button" className="btn btn-secondary btn-sm mt-2">
                  Daily Meals List
                </button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 ">
            <div class="shadow rounded p-4 bg-primary-subtle">
              <h5>Total Meals Counted</h5>
              <p class="text-muted">
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </small>
              </p>
              <div class="row text-center text-uppercase">
                <div class="col-4">
                  <h1 class="display-5">25</h1>
                  <h6>Breakfast</h6>
                </div>
                <div class="col-4 border-start border-end">
                  <h1 class="display-5">32</h1>
                  <h6>Lunch</h6>
                </div>
                <div class="col-4">
                  <h1 class="display-5">12</h1>
                  <h6>Dinner</h6>
                </div>
              </div>
            </div>
            <br />
            <div class="shadow rounded p-4 ">
              <h5>Rules and Regulations</h5>
              <p class="text-muted">
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </small>
              </p>
              <div class="">
                <div class="pb-2">
                  <small>
                    <b>1.</b>There is a scheduled time for every employee for meal selection.  
                  </small>
                </div>
                <div class="pb-2">
                  <small>
                    <b>2.</b> Everyone must Submit their meal preferences on time.
                  </small>
                </div>
                <div className='pb-2'>
                 <small> <b>3.</b>If any employee has failed to submit their preferences before allocated time,They are asked to report to the Mess Department Head.</small>
                </div><br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="py-2">
        <div class="shadow rounded p-4">
          <h5>Daily Meal Plan - Record</h5>
          <p class="text-muted">
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </small>
          </p>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Meal Date</th>
                  <th scope="col">Employee ID</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Selected Meals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>breakfast,lunch,dinner</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home