import React from 'react'

export default function signup() {
  return (
    <div className='SignUpBG'>
      <section>
        <br/><br/>
  <div className="container py-5 ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white"
          style={{ borderRadius: "1rem" }} >
          <div className="card-body  text-center">
            <div className=" ">
              <h2 className="fw-bold mb-2 text-uppercase">Create Your Account Today...</h2>
              <p className="text-white-50 mb-5">
                Please enter your email and password!
              </p>
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="typeEmailX"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="typeEmailX">
                  Email
                </label>
              </div>
              <div className="form-outline form-white mb-4">
                <input
                  type="password"
                  id="typePasswordX"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="typePasswordX">
                  Password
                </label>
              </div>
        <div class="dropdown" id="signUpRole">
<button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">
Select Your Role
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="/AccreditedDashboard"> Accredite </a></li>
<li><a class="dropdown-item" href="/AdminDashboard"> Admin</a></li>
<li><a class="dropdown-item" href="/ParentDashboard"> Parent</a></li>
<li><a class="dropdown-item" href="/StudentDashboard"> Student</a></li>
<li><a class="dropdown-item" href="/TeacherDashboard "> Teacher</a></li>
</ul>
</div>

              <p className="small mb-5 pb-lg-2" id="SignUpforgetPws">
                <a className="text-white-50" href="#!" >
                  Forgot password?
                </a>
              </p>
              <button
                className="btn btn-outline-light btn-lg px-5"
                type="submit"
              >
                Sign Up
              </button>
             
            </div>
            <div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     </div>
  )
}
