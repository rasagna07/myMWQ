import "./App.css";

import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import StudentDashboard from "./components/studentDashboard";
import Studentquize from "./components/studentquize";
import TeacherDashboard  from "./components/teacherDashboard";
import Teacherquize from "./components/teacherquize";
import ParentDashboard from "./components/parentDashboard";
import Parentquize from "./components/parentquize";
import AdminDashboard from "./components/adminDashboard";
import Adminmsg from "./components/adminmsg";
import AccreditedDashboard from "./components/accreditedDashboard";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import MyLogin from "./components/myLogin";
import MySignup from "./components/mySignup";
function Header(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
       BeMyFriend
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#wmqHeading">
            Why BMF?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#htwCaption">
         How BMF works?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
       About Us
            </a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="#footer">
          Contact Us
            </a>
          </li>
         
         
        </ul>


        <ul className="navbar-nav me mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="/Login">
             SignIn
                </a>
              </li>
            <li className="nav-item">
                <a className="nav-link" href="/SignUp">
             SignUp
                </a>
              </li>
              </ul>


      </div>
    </div>
  </nav>
  )
}

function Footer(){
  return(
    <div id='footer'>
   
    <div className="container-fluid ">
    
      <footer className="text-white text-center text-lg-start bg-dark">
    
        <div className="container p-4">
      
          <div className="row mt-4">
       
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About BeMyFriend</h5>
    
              <p>
              By promoting wellness, schools can help students stay focused
                    and engaged in their studies and achieve academic success.
              </p>
    
              <p>
              Students who prioritise their mental health are better able to
                    manage stress, anxiety, and depression, which can lead to better
                    academic performance.
              </p>
    
      
            </div>
           
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              {/* <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
    
              <div className="form-outline form-white mb-4">
                <input type="text" id="formControlLg" class="form-control form-control-lg" />
                <label className="form-label" for="formControlLg">Search</label>
              </div> */}
        
              <ul className="fa-ul" >
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Hyderabad,Telangana,India</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">bemyfriend@gmail.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+91 1234567890</span>
                </li>
          
        
               
                <a href="https://www.facebook.com/" target="_blank" type="button" id="footerSocialMediaIcons">
        <i class="fab fa-facebook" ></i>
    </a>
    
    <a href="https://www.instagram.com/" target="_blank" type="button" id="footerSocialMediaIcons">
        <i class="fab fa-instagram"></i>
    </a>
    
    
    </ul>
           
            </div>
           
            {/* <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
             
            </div> */}
         
          </div>
       
        </div>
    
    
      </footer>
    
    </div>
    
        </div>
  )
}


function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
  
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Login" element={<Login/>}/>
        <Route path="/StudentDashboard" element={<StudentDashboard/>}/>
        <Route path="/Studentquize" element={<Studentquize/>}/>
        <Route path="/TeacherDashboard" element={<TeacherDashboard/>}/>
        <Route path="/Teacherquize" element={<Teacherquize/>}/>
        <Route path="/ParentDashboard" element={<ParentDashboard/>}/>
        <Route path="/Parentquize" element={<Parentquize/>}/>
         <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
         <Route path="/Adminmsg" element={<Adminmsg/>}/>
         <Route path="/AccreditedDashboard" element={<AccreditedDashboard/>}/>
         <Route path="/MyLogin" element={<MyLogin/>}/>
         <Route path="/MySignup" element={<MySignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  );

}

export default App;
