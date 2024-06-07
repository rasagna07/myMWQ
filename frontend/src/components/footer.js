import React from 'react'

export default function footer() {
  return (
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
