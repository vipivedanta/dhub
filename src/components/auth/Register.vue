<template>
    <section class="section-first">
  <div class="dhb-container">
      
      <div class="form-bx">
          <form class="login-form" action="phone-verification.html">
              <h5 class="text-center mb-10">{{ $t('register.header') }}</h5>
              <p class="para-1">{{ $t('messages.all_mandatory') }}</p>
              
              <div class="form-control-bx">
              <input 
                    type="text" 
                    :placeholder="$t('user.first_name')" 
                    class="dhb-form-control"
                    v-model="user.first_name"
                >
                  <i class="icon-checked correct-icon"></i>
                  <span v-if="!$v.user.first_name.required && $v.user.first_name.$dirty" class="errormsg">{{$t('register.validations.first_name')}}</span>
              </div>
              <div class="form-control-bx">
              <input 
                    type="text" 
                    :placeholder="$t('user.last_name')" 
                    class="dhb-form-control"
                    v-model="user.last_name"
              >
              <span v-if="!$v.user.last_name.required && $v.user.last_name.$dirty" class="errormsg">{{$t('register.validations.last_name')}}</span>
              </div>
              
              <div class="form-control-bx">
              <input 
                    type="text" 
                    :placeholder="$t('user.email')" 
                    class="dhb-form-control"
                    v-model="user.email"
              >
              <span v-if="!$v.user.email.required && $v.user.email.$dirty" class="errormsg">{{$t('register.validations.email')}}</span>
              <span v-if="!$v.user.email.email" class="errormsg">{{$t('register.validations.invalid_email')}}</span>
              </div>

              <div class="form-control-bx">
              <input 
                    type="text" 
                    :placeholder="$t('user.phone')" 
                    class="dhb-form-control"
                    v-model="user.phone"
              >
              <span v-if="!$v.user.phone.required && $v.user.phone.$dirty" class="errormsg">{{$t('register.validations.phone')}}</span>
              <span v-if="!$v.user.phone.minLength && $v.user.phone.$dirty" class="errormsg">{{$t('register.validations.invalid_phone')}}</span>
              <span v-if="!$v.user.phone.maxLength && $v.user.phone.$dirty" class="errormsg">{{$t('register.validations.invalid_phone')}}</span>              
              </div>


              <div class="form-control-bx showpass">
              <input 
                    type="password" 
                    :placeholder="$t('user.password')" 
                    class="dhb-form-control"
                    v-model="user.password"
              >
                  <a class="showpassbtn"><i class="icon-eye"></i></a>
                  <span v-if="!$v.user.password.required && $v.user.password.$dirty" class="errormsg">{{$t('register.validations.password')}}</span>
              </div>
              <div class="form-control-bx showpass">
              <input 
                    type="password" 
                    :placeholder="$t('user.confirm_password')" 
                    class="dhb-form-control"
                    v-model="user.confirm_password"
              >
                  <a class="showpassbtn"><i class="icon-eye"></i></a>
                  <span v-if="!$v.user.confirm_password.required && $v.user.confirm_password.$dirty" class="errormsg">{{$t('register.validations.confirm_password')}}</span>
              </div>
              
              <div class="info-txt mb-10">
              By signing up here, you agree to the D-Hub <a href="#">terms of service</a> and <a href="#">privacy policy</a>
                  </div>
              
              
              <button class="dhb-btn btn-s2" type="button" @click="saveUser()">{{ $t('form.next') }}</button>
              
              <div class="text-center mt-5">{{ $t('form.already_have_account') }} <a href="login.html">{{ $t('login.login_here')}}</a></div>
              
          </form>
      </div>
      
      </div>
        
    </section>
</template>

<script>

import { required, email, maxLength, minLength } from "vuelidate/lib/validators";

export default {
    name: 'Register',
    data() {
        return {
            user : {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                password: '',
                confirm_password: ''
            }
        }
    },

    validations: {
        user: {
            first_name: { required },
            last_name: { required },
            email: { required, email },
            phone: { required, maxLength:maxLength(10), minLength:minLength(10) },
            password: { required },
            confirm_password: { required }
        }
    },

    methods: {

        validateForm: function() {
            this.$v.$touch();
            if( this.$v.$invalid ){
                return false;
            }
            return true
        },

        saveUser: function() {
            if(!this.validateForm()) 
                return false
        }
    },

    
}
</script>