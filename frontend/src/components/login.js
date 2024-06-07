
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
// const navigate=useNavigate();
//   const [errors, setErrors] = useState({});

//   const collectData = async () => {
//     try {
//       console.warn(formData.email, formData.password);
//       const result = await fetch("http://localhost:5000/register", {
//         method: "POST",
//         body: JSON.stringify({ email: formData.email, password: formData.password }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await result.json();
//       console.warn(data);
//       navigate('/');
//     }
//      catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     // Clear validation error when user modifies the input
//     setErrors({
//       ...errors,
//       [name]: '',
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = {};

//     // Validate email and password
//     if (!formData.email.trim()) {
//       validationErrors.email = 'Email is required';
//     } else if (!/^\S+@gmail\.com$/.test(formData.email)) {
//       validationErrors.email = 'Email is not valid';
//     }

//     if (!formData.password.trim()) {
//       validationErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       validationErrors.password = 'Password should be at least 6 characters';
//     }

//     setErrors(validationErrors);

//     // If there are no validation errors, submit the form data
//     if (Object.keys(validationErrors).length === 0) {
//       // Call collectData to send form data to the backend
//       collectData();
//     }
//   };

//   return (
//     <div className="loginBG">
//       <section>
//         <br/><br/><br/><br/>
//         <form onSubmit={handleSubmit}>
//           <div className="container py-5">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//                 <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
//                   <div className="card-body text-center">
//                     <h2 className="fw-bold mb-4 text-uppercase">Login</h2>
                    
//                     <div className="mb-4">
//                       <label className="form-label text-white" htmlFor="typeEmailX">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="typeEmailX"
//                         className="form-control form-control-lg"
//                         placeholder='enter email'
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                       {errors.email && <span className="text-danger">{errors.email}</span>}
//                     </div>
                    
//                     <div className="mb-4">
//                       <label className="form-label text-white" htmlFor="typePasswordX">
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         id="typePasswordX"
//                         className="form-control form-control-lg"
//                         placeholder='enter password'
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                       />
//                       {errors.password && <span className="text-danger">{errors.password}</span>}
//                     </div>
                    
//                     <p className="small mb-4">
//                       <a href="#!" className="text-white">
//                         Forgot password?
//                       </a>
//                     </p>
                    
//                     <button
//                       className="btn btn-outline-light btn-lg px-5"
//                       type="submit"
//                     >
//                       Login
//                     </button>
                    
//                     <div className="mt-4">
//                       <p className="mb-0 text-white-50">
//                         Don't have an account?{' '}
//                         <a href="/SignUp" className="text-white fw-bold">
//                           Sign Up
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </section>
//       <br/><br/><br/><br/>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Hook from react-router-dom for navigation

  const collectData = async () => {
    try {
      console.warn(formData.email, formData.password);
      let result = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify({ email: formData.email, password: formData.password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      result = await result.json();
      console.warn(result);
      navigate('/'); // Navigate to home page after successful login
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear validation error when user modifies the input
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Validate email and password
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^\S+@gmail\.com$/.test(formData.email)) {
      validationErrors.email = 'Email is not valid';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters';
    }

    setErrors(validationErrors);

    // If there are no validation errors, submit the form data
    if (Object.keys(validationErrors).length === 0) {
      // Call collectData to send form data to the backend
      collectData();
    }
  };

  return (
    <div className="loginBG">
      <section>
        <br/><br/><br/><br/>
        <form onSubmit={handleSubmit}>
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
                        placeholder='enter email'
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
                        placeholder='enter password'
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    
                    <p className="small mb-4">
                      <a href="#!" className="text-white">
                        Forgot password?
                      </a>
                    </p>
                    {/* <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="reset"
                    >
                    reset
                    </button> */}
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

export default Login;
