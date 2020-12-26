<template>
    <section class="section-first">
  <div class="dhb-container">
      
      <div class="form-bx">
          <form class="login-form">
              <h5 class="text-center mb-10">Sing in to your account</h5>
              
              <div class="form-control-bx error">
              <input type="text" placeholder="User ID (Email address)" class="dhb-form-control">
                  <i class="icon-exclamation-circle valid-icon"></i>
                  <span class="errormsg">The email address entered is not valid</span>
              </div>
              
              <div class="form-control-bx showpass">
                  <input type="password" placeholder="Password" class="dhb-form-control">
                  <a class="showpassbtn"><i class="icon-eye"></i></a>
              </div>
              
              <div class="clearit">
              <input type="checkbox" id="chk1" class="chk-s1"> <label for="chk1">Remember</label>
                  <a href="forgot-password.html" class="pull-right">Forgot password ?</a>
              </div>              
              
              
              <p class="policy-reminder-txt">By signing here, you agree to the D-Hub <a href="#">Terms of service</a> and <a href="#">Privacy Policy</a></p>
              
              
              <button class="dhb-btn btn-s2">Login</button>
              
              <div class="text-center mt-5">Not yet a member ? <a href="signup.html">Create an account</a></div>
              
              
          </form>
          
          <div class="footer-links">
              <p>Click here to learn more about Bizhub and</p>
              <ul>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Use Agreement</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </div>
          
          
      </div>
      
      </div>
        
    </section>
</template>

<script>
export default  {
    name : 'Login' , 
}
</script>