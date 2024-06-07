import React from 'react'

export default function studentDashboard() {
  return (
    <div className='studashbg'>
      <div className='container-fluid' >
        <div className='row'>
           <div className='col'>
            <section className="dashboard" >
           <center> <h1 id="dashboardHeading">Welcome Student!!</h1>
<a href="/studentquize"> <button className='btn btn-primary btn-lg' id="stuBtn">Do you want to start quiz?</button></a>
 
  <br/><br/>
  <h3>OR</h3>
  <br/>
  <button className='btn btn-success btn-lg'  id="stuBtn">Check Happiness Quotient?</button>
</center>
</section>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           </div>
        </div>
      </div>
    </div>
  )
}
