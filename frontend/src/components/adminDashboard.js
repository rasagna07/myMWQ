import React from 'react'

export default function adminDashboard() {
  return (
    <div className='admindashbg'>
      <div className='container-fluid' >
        <div className='row'>
           <div className='col'>
            <section className="dashboard"
            >
                <br/><br/><br/><br/><br/>
         <center>  <h1 id="dashboardHeadingAdmin">Welcome Admin!!</h1>
<a href="/adminmsg">  <button className='btn btn-dark btn-lg' id='admBtn' >Do you want to send any message?</button></a>

  <br/>
  <h3 id="or">OR</h3>
 
  <button className='btn btn-success btn-lg' id="admBtn">Check Happiness Quotient?</button>
</center>
</section>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           </div>
        </div>
      </div>
    </div>
  )
}
