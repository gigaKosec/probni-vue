import Vue from 'vue'
import App from './App.vue'
import { /* ValidationObserver, ValidationProvider, */ extend } from 'vee-validate'
import {required, min} from 'vee-validate/dist/rules';
import { messages} from 'vee-validate/dist/locale/sl.json'
import parsePhoneNumber from "libphonenumber-js/mobile"

Vue.config.productionTip = false

let rules = {required, min}

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
});

extend('isPhoneNumber', {
  validate (phoneNumber) {
    if (phoneNumber.length>1) {
      return parsePhoneNumber(phoneNumber, "SI").isValid();
    } else {
      return true
    }
    
  },
  message: "Prosim, vnesite številko mobilnega telefona (ne stacionarnega)"
});



/* Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider); */

new Vue({
  render: h => h(App),
}).$mount('#app')
