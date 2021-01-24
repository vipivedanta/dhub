<template>
    <section class="section-first">
  <div class="dhb-container">
      <div class="form-bx">
          <form class="login-form">
              <h5 class="text-center mb-10">{{ $t('login.header') }}</h5>
              <p class="para-1">{{ $t('messages.all_mandatory') }}</p>
              <div class="form-control-bx error">
              <input type="text" :placeholder="$t('user.email')"   class="dhb-form-control" v-model="user.email">
                  <i class="icon-exclamation-circle valid-icon"></i>
                  <span v-if="!$v.user.email.required && $v.user.email.$dirty" class="errormsg">{{$t('register.validations.email')}}</span>
              <span v-if="!$v.user.email.email" class="errormsg">{{$t('register.validations.invalid_email')}}</span>
              </div>
              <div class="form-control-bx showpass">
                  <input type="password" :placeholder="$t('user.password')"  class="dhb-form-control" v-model="user.password">
                  <a class="showpassbtn"><i class="icon-eye"></i></a>
                  <span v-if="!$v.user.password.required && $v.user.password.$dirty" class="errormsg">{{$t('register.validations.password')}}</span>
              </div>
              <div class="clearit">
              <input type="checkbox" id="chk1" class="chk-s1"> <label for="chk1">Remember</label>
                  <a href="forgot-password.html" class="pull-right">Forgot password ?</a>
              </div>              
              <p class="policy-reminder-txt">By signing here, you agree to the D-Hub <a href="#">Terms of service</a> and <a href="#">Privacy Policy</a></p>
              <div v-if="message.loginError" class="alert alert-danger">
                  {{ message.loginError.errorMessage }}<br/>
                  <a :href="message.loginError.info">{{$t('messages.learn_more')}}</a>
              </div>
              <button :disabled="ui.requestInProgress" class="dhb-btn btn-s2" type="button" @click="loginUser()">{{ $t('login.login_here') }}</button>
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
import { required, email, maxLength, minLength } from "vuelidate/lib/validators";
import { login } from '../../services/authService';
export default {
    name: 'Login',
    data() {
        return {
            user : {
                email: '',
                password: ''
            },
            message: {
                loginError : false
            },
            ui: {
                requestInProgress: false
            }
        }
    },
    validations: {
        user: {
            email: { required, email },
            password: { required }
        }
    },
    methods: {
        validateForm: function() {
            this.$v.$touch();
            return this.$v.$invalid;
        },
        loginUser: async function() {
            this.message.loginError = false;
            if( this.validateForm() ) return false;
            this.ui.requestInProgress = true;
            let loginResponse = await login( this.user );
            this.ui.requestInProgress = false;
            if( loginResponse.statusCode == 400 ) {
                this.message.loginError = loginResponse;
                return false;
            }
            if( loginResponse.statusCode == 200 ) {
                this.$router.push({ name: 'VerifyOtp'} );
            }
        }
    },
}
</script>