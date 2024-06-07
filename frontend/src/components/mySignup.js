import React, { useState } from 'react';

const MySignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleRoleSelect = (role, roleText) => {
    setFormData({
      ...formData,
      role,
    });
    document.getElementById('roleButton').textContent = roleText;
    setErrors({
      ...errors,
      role: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^\S+@gmail+\.com$/.test(formData.email)) {
      validationErrors.email = 'Email is not valid';
    }


    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters';
    }

    if (!formData.role) {
      validationErrors.role = 'Role is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
   
    }
  };

  return (
    <div className='SignUpBG'>
      <section>
        <br /><br />
        <form onSubmit={handleSubmit} action="/register" method="post">
          <div className="container py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                  <div className="card-body text-center">
                    <div className="">
                      <h2 className="fw-bold mb-2 text-uppercase">Create Your Account Today...</h2>
                      <p className="text-white-50 mb-5">Please enter your email and password!</p>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                      </div>
                      <div className="dropdown mb-4" id="signUpRole">
                        <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" id="roleButton">
                          Select Your Role
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelect('AccreditedDashboard', 'Accredite')}>Accredite</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelect('AdminDashboard', 'Admin')}>Admin</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelect('ParentDashboard', 'Parent')}>Parent</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelect('StudentDashboard', 'Student')}>Student</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelect('TeacherDashboard', 'Teacher')}>Teacher</a></li>
                        </ul>
                      </div>
                      {errors.role && <span className="text-danger">{errors.role}</span>}
                      <br/>
                   
                      <p  id="SignUpforgetPws">
                        <a className="text-white-20" href="#!">Forgot password?</a>
                      </p>
                    
                      <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default MySignup;
