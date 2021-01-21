<template>
    <section class="section-first">
  <div class="dhb-container">
      
      <div class="form-bx">
          <form class="login-form" action="success.html">
              
              <div class="icon-title-bx text-center">
                  <i class="icon-mobile-1"></i>
                  <p>{{ $t('otp.phone_verification') }}</p>
              </div>
              
              <h3 v-if="lastPhoneDigits">{{ $t('otp.otp_sent_to', { phone: lastPhoneDigits })}}.<br>
              {{ $t('otp.please_enter_code') }}
              </h3>
              <h3 v-if="!lastPhoneDigits" class="text text-danger">{{ $t('otp.otp_phone_error') }}</h3>
              
              
              <div :class="isValid ? 'form-control-bx': 'form-control-bx error'">
              <input type="text" placeholder="Enter phone number" class="dhb-form-control" v-model="otp">
                  <span class="errormsg" v-if="isValid">
                      {{ $('messages.global_required_message') }}
                  </span>
              </div>
              
              <div class="info-txt mb-10">
              {{ $t('otp.number_sharing_policy') }}
              </div>
              
              <div class="text-center mb-10">{{ $t('otp.not_yet_received') }} <a href="#">{{ $t('otp.resend_otp') }}</a></div>
              
              <button type="button" class="dhb-btn btn-s2">{{ $t('otp.verify')}}</button>
              
              
          </form>
      </div>
      
      </div>
        
    </section>
</template>

<script>
import func from 'vue-temp/vue-editor-bridge';
import { required } from "vuelidate/lib/validators";

export default {
    data() {
        return {
            otp: ''
        }
    },

    validations: {
        otp: { required }
    },

    computed: {
        lastPhoneDigits: function() {
            return this.$store.getters.getLastPhoneDigits;
        },

        isValid: function() {
            return !this.$v.otp.required && this.$v.otp.$dirty;
        }
    },

    beforeMount() {
        if( this.lastPhoneDigits == false ) {
            this.$router.push({name:'Register'});
        }
    },

    methods: {

        validateForm: function() {
            this.$v.$touch();
            return this.$v.$invalid;
        },

        handleOtp: function() {           
            
        }
    }
}
</script>