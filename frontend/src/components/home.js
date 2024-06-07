import React from "react";
import "./mystyles.css";
import homeBG from "../images/homebg.png";
import studentIMG from "../images/student.png";
import teacherIMG from "../images/teacher.jpg";
import parentIMG from "../images/parents.jpg";
import principalIMG from "../images/principal.jpg";
import accreditedIMG from "../images/accredited.jpg";

export default function Home() {
  return (
    <div className="homeBG">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8" id="leftSideHome">
            <br/><br/>
            <h1 id="homeHeading">WE ARE A GUIDING TOOL!!</h1>
            <div className="row">
              <div className="col-md-12">
                <br />
                <h3 id="quotation">
                  To Ensure Positive Learning Environment,Unleash your mental
                  wellness quotient :){" "}
                </h3>
              </div>
            </div>

            <div className="row" id="whoRElibile">
              <div className="col-sm-2">
                <a href="/StudentDashboard"><button id="homeMemBtn">
                  {" "}
                  <img id="eligibleMem" src={studentIMG} />
                </button></a>
                
                <h5 id="eligibleMemText">Student</h5>
              </div>
              <div className="col-sm-2">
                <a href="/TeacherDashboard">
                <button id="homeMemBtn">
                  {" "}
                  <img id="eligibleMem" src={teacherIMG} />
                </button></a>
                <h5 id="eligibleMemText">Teacher</h5>
              </div>
              <div className="col-sm-2">
                <a href="/ParentDashboard">
                <button id="homeMemBtn">
                  {" "}
                  <img id="eligibleMem" src={parentIMG} />
                </button></a>
                <h5 id="eligibleMemText">Parents</h5>
              </div>
              <div className="col-sm-2">
                <a href="/AdminDashboard">
                <button id="homeMemBtn">
                  {" "}
                  <img id="eligibleMem" src={principalIMG} />
                </button></a>
                <h5 id="eligibleMemText">Principal</h5>
              </div>
              <div className="col-sm-2">
                <a href="AccreditedDashboard">
                <button id="homeMemBtn">
                  {" "}
                  <img id="eligibleMem" src={accreditedIMG} />
                </button></a>
                <h5 id="eligibleMemText">Accredited</h5>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col" id="trynowButton">
                <br />
                <a href="/SignUp">  <button className="btn btn-success btn-lg" id="homeTryNowBut">
                  Try Now
                </button></a>
             
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <img id="homeBGadjusting" src={homeBG} alt="Background" />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <h1 id="wmqHeading">WHY MENTAL WELLNESS QUOTIENT IS IMPORTANT?</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 id="mwqQuote">
                A Wellness Lifestyle Is Much More Just Being Drug-Free or
                Disease-Free!!
              </h1>
            </div>
            <div className="col-md-6">
              <p>
                <b>Students can stay focused</b>
                <br />
                By promoting wellness, schools can help students stay focused
                and engaged in their studies and achieve academic success. When
                students are physically healthy and mentally well, they are more
                likely to attend school regularly. This can help reduce
                absenteeism and improve overall academic performance.
              </p>
              <p>
                <b>Improved academic performance:</b>
                <br />
                Students who prioritise their mental health are better able to
                manage stress, anxiety, and depression, which can lead to better
                academic performance. Better relationships: Good mental health
                can lead to improved social connections and better relationships
                with peers, family, and friends
              </p>
              <p>
                <b>Prevention of Mental Health Problems: </b>
                <br />
                Schools can play a role in preventing the development of mental
                health problems by promoting positive mental health and
                providing support and resources to students.
              </p>
            </div>
          </div>
        </div>
        <section className="htw">
        <div className="container">
        <div className="row ">
          <div className="col-8">
<h6 id="htwCaption">This website is mainly for developing the parameters that go into making a
            school a happy school</h6>
            <br/>
            <ol><li>
          <b>We are giving access to :-</b>
            <ul>
          
              <li>Student</li>
              <li>Teacher</li>
              <li>Parent</li>
              <li>Admin</li>
              <li>Accredited</li>
             
            </ul>
            </li>
            {/* <br/> */}
            <li>
            <h6>
              We take inputs from school/college students,teachers and parents and
              return a value that will indicate the happened quotient of a school or
              college.
            </h6><ul>
        <li><b>FOR STUDENTS:-</b></li>
         <p>   We take feedback from Students,by asking few questions about their
              interation at school</p>

              <li><b>FOR TEACHERS:-</b></li>
              <p>  We take feedback from Teachers,by asking few questions about school
              environment</p>
              <li><b>FOR PARENTS:-</b></li>
              <p>    We take feedback from Parents,by asking few questions about their
              child's behaviour at home</p>
              <li><b>FOR ADMIN:-</b></li>
              <p>     Admin is the head of the department,he can have the access to :-</p>
              <ul>
                <li>send any message to parents/teacher/student to start the quiz</li>
                <li>Happiness Quotient of entire school can be checked</li>
              </ul>
              <li><b>FOR ACCREDITED:-</b></li>
              <p>       Accredited has a power to check Happiness Qotient of any institution by
              selection the state and the district</p>
              <br/><br/>
              </ul>
            </li>
</ol>
          </div>
          <div className="col-4">
            <h1 id="htwHeading">How It Works?</h1>
          </div>
        </div>
        </div>
        </section>
      </div>
    </div>
  );
}
