import { /* ValidationObserver, ValidationProvider, */ extend } from 'vee-validate'
import {required, min, email} from 'vee-validate/dist/rules';
import { messages} from 'vee-validate/dist/locale/sl.json'
import parsePhoneNumber from "libphonenumber-js/mobile"
import { setInteractionMode } from 'vee-validate';

// Vee-Validate settings:
setInteractionMode('eager');
let rules = {required, min, email}
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
  message: "Prosim, vnesite veljavno številko mobilnega telefona (ne stacionarnega)"
});