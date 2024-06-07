import React from 'react'
import TeacherImgQuize from '../images/teacherquizeBG.jpg';

export default function teacherquize() {
  return (
    <div className='quizeBGTeacher'>
      <div className='container-fluid'>
        <br/><br/>
        <div className='row'>
            <h1 id="quizeHeading">QUIZ</h1>
        </div>
        <div className='row'>
            <div className='col-md-9'>
<ol>
    <li><h5>Do you make innovative,to make student easier understand?</h5></li>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz1" id="TeachQz1.1"/>
  <label class="form-check-label" for="TeachQz1.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz1" id="TeachQz1.2" />
  <label class="form-check-label" for="TeachQz1.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz1" id="TeachQz1.3" />
  <label class="form-check-label" for="TeachQz1.3">
    Very Much
  </label>
</div>
<li><h5>Will you give equal importance to accademic and extra curricular activities?</h5></li>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz2" id="TeachQz2.1"/>
  <label class="form-check-label" for="TeachQz2.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz2" id="TeachQz2.2" />
  <label class="form-check-label" for="TeachQz2.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz2" id="TeachQz2.3" />
  <label class="form-check-label" for="TeachQz2.3">
    Very Much
  </label>
</div>
<li><h5>Do you enjoy working with school?</h5></li>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz3" id="TeachQz3.1"/>
  <label class="form-check-label" for="TeachQz3.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz3" id="TeachQz3.2" />
  <label class="form-check-label" for="TeachQz3.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz3" id="TeachQz3.3" />
  <label class="form-check-label" for="TeachQz3.3">
    Very Much
  </label>
</div>
<li><h5>Will the management keep academic work organized?</h5></li>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz4" id="TeachQz4.1"/>
  <label class="form-check-label" for="TeachQz4.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz4" id="TeachQz4.2" />
  <label class="form-check-label" for="TeachQz4.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz4" id="TeachQz4.3" />
  <label class="form-check-label" for="TeachQz4.3">
    Very Much
  </label>
</div>
<li><h5>Do the school management motivates you to be more effective in your work?</h5></li>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz5" id="TeachQz5.1"/>
  <label class="form-check-label" for="TeachQz5.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz5" id="TeachQz5.2" />
  <label class="form-check-label" for="TeachQz5.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="TeachQz5" id="TeachQz5.3" />
  <label class="form-check-label" for="TeachQz5.3">
    Very Much
  </label>
</div>
</ol>
            </div>
            <div className='col-md-3'>
<img src={TeacherImgQuize} id="TeachQzizeBG"/>
            </div>
        </div>
      <section id="quizeSubmit">
                <button  type='submit' className='btn btn-md btn-success'>submit</button>
          </section>
          <br/><br/>
      </div>
    </div>
  )
}
