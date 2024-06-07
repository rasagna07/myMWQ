import React from 'react'

export default function teacherDashboard() {
  return (
    <div className='teachdashbg'>
      <div className='container-fluid' >
        <div className='row'>
           <div className='col'>
            <section className="dashboard"
            >
                <br/><br/><br/><br/><br/>
          <center>  <h1 id="dashboardHeadingTeach">Welcome Teacher!!</h1>
<a href="/teacherquize"> <button className='btn btn-primary btn-lg' id="teachBtn">Do you want to start quiz?</button></a>
 
  <br/>
  <h3>OR</h3>
 
  <button className='btn btn-success btn-lg' id="teachBtn">Check Happiness Quotient?</button>
</center>
</section>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           </div>
        </div>
      </div>
    </div>
  )
}
