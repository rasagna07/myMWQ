import React from 'react'

export default function accreditedDashboard() {
  return (
    <div className='accreDbBG'>
   <div className='container-fluid'>
    <div className='row'>
        <div className='col'>
            <div className='accDBtext'>
            <br/><br/><br/><br/><br/>
            <h1 id="dashboardHeadingAccr">Welcome!!</h1>
           {/* <h3 id="accText">Top 10 institute State wise</h3> */}
           <div className="dropdown">
  <button className="btn btn-success dropdown-toggle btn-lg" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
Check Top 10 institute state wise
  </button>
  <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Andhra Pradesh</a></li>
    <li><a className="dropdown-item" href="#">Arunachal Pradesh</a></li>
    <li><a className="dropdown-item" href="#">Assam</a></li>
    <li><a className="dropdown-item" href="#">Telangana</a></li>
  </ul>
</div>
<br/><br/>
           <div class="dropdown">
  <button class="btn btn-success dropdown-toggle btn-lg" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
Check Top 10 institute state wise
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">hyderabad</a></li>
    <li><a class="dropdown-item" href="#">Nalgonda</a></li>
    <li><a class="dropdown-item" href="#">Warangal</a></li>
  </ul>
</div>
        </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
   </div>
   </div>
    </div>
  )
}
