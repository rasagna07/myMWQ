import React from 'react'

export default function adminmsg() {
  return (
    <div className='admmsgbg'>
        <div className='container'>
          <br/><br/>
 <div className='row'>
    <div className='col'>
    <form>
        
      <div className="form-group">
        <br/>
    <label for="exampleFormControlTextarea1"><h4>Type your message here...</h4></label>
    <br/><br/>
   <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" ></textarea>
  </div>
  <br/><br/>
  <h4>Send this message to...</h4>
  <div className="form-check">
   
   
    <br/>
  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label className="form-check-label" for="defaultCheck1">
Students
  </label>

</div>
<div className="form-check">
   
   
   <br/>
 <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
 <label className="form-check-label" for="defaultCheck1">
  Teachers
 </label>

</div>
<div className="form-check">
   
   
   <br/>
 <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
 <label className="form-check-label" for="defaultCheck1">
 Parents
 </label>

</div>

<center><button type='submit' id="subBtn" className='btn btn-success btn-lg'>Send</button></center>
      </form>
    </div>
 </div>
 <br/><br/><br/><br/><br/><br/>
 </div>
    </div>
  )
}
