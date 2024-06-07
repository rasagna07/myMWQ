import React, { useState } from 'react';

const MyLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } 
  
    else if (!/^\S+@gmail+\.com+$/.test(formData.email)) {
        validationErrors.email = 'Email is not valid';
      }
 
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      // Here you can submit the form data to your backend or perform further actions
    }
  };

  return (
    <div className="loginBG">
      <section>
        <br/><br/><br/><br/>
        <form onSubmit={handleSubmit} method="POST" action="/login">
          <div className="container py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                  <div className="card-body text-center">
                    <h2 className="fw-bold mb-4 text-uppercase">Login</h2>
                    
                    <div className="mb-4">
                      <label className="form-label text-white" htmlFor="typeEmailX">
                        Email
                      </label>
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    
                    <div className="mb-4">
                      <label className="form-label text-white" htmlFor="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    
                    <p className="small mb-4">
                      <a href="#!" className="text-white" >
                        Forgot password?
                      </a>
                    </p>
                    
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
             
                    
                    <div className="mt-4">
                      <p className="mb-0 text-white-50">
                        Don't have an account?{' '}
                        <a href="/SignUp" className="text-white fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
<br/><br/><br/><br/>
    </div>
  );
};

export default MyLogin;
