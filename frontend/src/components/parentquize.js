import React from 'react'
import ParentImgQuize from '../images/parentquizeBG2.webp';

export default function  parentquize() {
  return (
    <div className='quizeBG'>
      <div className='container-fluid'>
        <br/><br/>
        <div className='row'>
            <h1 id="quizeHeading">QUIZ</h1>
        </div>
        <div className='row'>
            <div className='col-md-9'>
<ol>
    <li><h5>Does the school include good discipline</h5></li>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu1" id="pareQu1.1"/>
  <label class="form-check-label" for="pareQu1.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu1" id="pareQu1.2" />
  <label class="form-check-label" for="pareQu1.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu1" id="pareQu1.3" />
  <label class="form-check-label" for="pareQu1.3">
    Very Much
  </label>
</div>
<li><h5>Is your child's sleep effected by their homework?</h5></li>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu2" id="pareQu2.1"/>
  <label class="form-check-label" for="pareQu2.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu2" id="pareQu2.2" />
  <label class="form-check-label" for="pareQu2.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu2" id="pareQu2.3" />
  <label class="form-check-label" for="pareQu2.3">
    Very Much
  </label>
</div>
<li><h5>Do you think your child focus on academic work when they are doing homework?</h5></li>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu3" id="pareQu3.1"/>
  <label class="form-check-label" for="pareQu3.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu3" id="pareQu3.2" />
  <label class="form-check-label" for="pareQu3.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu3" id="pareQu3.3" />
  <label class="form-check-label" for="pareQu3.3">
    Very Much
  </label>
</div>
<li><h5>Does the school help your child with anxious and emotion?</h5></li>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu4" id="pareQu4.1"/>
  <label class="form-check-label" for="pareQu4.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu4" id="pareQu4.2" />
  <label class="form-check-label" for="pareQu4.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu4" id="pareQu4.3" />
  <label class="form-check-label" for="pareQu4.3">
    Very Much
  </label>
</div>
<li><h5>Does your child likes to go school daily?</h5></li>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu5" id="pareQu5.1"/>
  <label class="form-check-label" for="pareQu5.1">
 Not At All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu5" id="pareQu55.2" />
  <label class="form-check-label" for="pareQu5.2">
  Somewhat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="pareQu5" id="pareQu5.3" />
  <label class="form-check-label" for="pareQu5.3">
    Very Much
  </label>
</div>
</ol>
            </div>
            <div className='col-md-3'>
<img src={ParentImgQuize} id="pareQuizeBG"/>
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
