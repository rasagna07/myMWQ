import React from 'react'
import StudentImgQuize from '../images/studentquizeBG.jpg';

export default function studentquize() {
  return (
    <div className='quizeBG'>
    <div className='stuBG'>
      <div className='container-fluid'>
        <br/><br/>
        <div className='row'>
            <h1 id="quizeHeading">QUIZ</h1>
        </div>
        <div className='row'>
            <div className='col-md-9'>
<ol>
    <li><h5>Are there any bullying/discrimination at school?</h5></li>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu1" id="stuQu1.1"/>
  <label class="form-check-label" for="stuQu1.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu1" id="stuQu1.2" />
  <label class="form-check-label" for="stuQu1.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu1" id="stuQu1.3" />
  <label class="form-check-label" for="stuQu1.3">
    Very Much
  </label>
</div>
<li><h5>Do you think you are able to access right learning?</h5></li>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu2" id="stuQu2.1"/>
  <label class="form-check-label" for="stuQu2.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu2" id="stuQu2.2" />
  <label class="form-check-label" for="stuQu2.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu2" id="stuQu2.3" />
  <label class="form-check-label" for="stuQu2.3">
    Very Much
  </label>
</div>
<li><h5>If issue do arised, will the school management resolves the problem?</h5></li>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu3" id="stuQu3.1"/>
  <label class="form-check-label" for="stuQu3.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu3" id="stuQu3.2" />
  <label class="form-check-label" for="stuQu3.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu3" id="stuQu3.3" />
  <label class="form-check-label" for="stuQu3.3">
    Very Much
  </label>
</div>
<li><h5>How happy do you feel at school?</h5></li>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu4" id="stuQu4.1"/>
  <label class="form-check-label" for="stuQu4.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu4" id="stuQu4.2" />
  <label class="form-check-label" for="stuQu4.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu4" id="stuQu4.3" />
  <label class="form-check-label" for="stuQu4.3">
    Very Much
  </label>
</div>
<li><h5>Is your classroom hygenic?</h5></li>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu5" id="stuQu5.1"/>
  <label class="form-check-label" for="stuQu5.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu5" id="stuQu55.2" />
  <label class="form-check-label" for="stuQu5.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="stuQu5" id="stuQu5.3" />
  <label class="form-check-label" for="stuQu5.3">
    Very Much
  </label>
</div>
</ol>
            </div>
            <div className='col-md-3'>
<img src={StudentImgQuize} id="stuQuizeBG"/>
            </div>
        </div>
      <section id="quizeSubmit">
                <button  type='submit' className='btn btn-md btn-success'>submit</button>
          </section>
          <br/><br/>
      </div>
    </div>
    </div>
  )
}
