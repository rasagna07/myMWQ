import React from 'react'

export default function parentDashboard() {
  return (
    <div className='parentdashbg'>
      <div className='container-fluid' >
        <div className='row'>
           <div className='col'>
            <section className="dashboard"
            >
          <center> <h1 id="dashboardHeadingParent">Welcome Parent!!</h1>
<a href="/parentquize">  <button className='btn btn-light btn-lg' id="parentBtn">Do you want to start quiz?</button></a>

  <br/><br/>
  <h3 id="orParent">OR</h3>
  <br/>
  <button className='btn btn-success btn-lg' id="parentBtn">Check Happiness Quotient?</button>
</center>
</section>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           </div>
        </div>
      </div>
    </div>
  )
}
