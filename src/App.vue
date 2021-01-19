<template>
  <div id="app">
    <h1> TESTNO</h1>
        <!--   <b-form-group>
            <b-form-input></b-form-input>
          </b-form-group>
      
        <ValidationObserver v-slot="{ handleSubmit, invalid, reset}">
            <form @submit.prevent="handleSubmit(sendForm)" @reset.prevent="reset">
              <ValidationProvider rules="required|isPhoneNumber:SI" v-slot="{ errors }" name="tel">
              <div> Prosim, vnesi mobilno številko</div>
              <b-form-input v-model="tel" type="text"></b-form-input>
              <p> {{ errors [0]}}</p>
              
              
              </ValidationProvider>
              <button type="submit">pošlji</button>
              <button type="reset">ponastavi</button>
            </form>
        
        <ValidationProvider>
          <b-card><b-form-group label="vpisi podatke">
          <b-form-input type=text>
          
          </b-form-input>
          </b-form-group></b-card>
        </ValidationProvider>
        

        <ValidationProvider
        rules="required|email"
        name="Email"
        v-slot="{ valid, errors }"
      >
        <b-form-group
          label="Email address:"
          label-for="exampleInput1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            type="textarea"
            v-model="email"
            :state="errors[0] ? false : valid ? true : null"
            placeholder="Enter email"
          ></b-form-input>
          <b-form-invalid-feedback id="inputLiveFeedback">{{
            errors[0]
          }}</b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

</ValidationObserver>

        <form class="needs-validation" novalidate>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom01">First name</label>
              <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
          </div>
        </form> -->

  <button @click="startCamundaProces">Camunda: start process</button>
        
  </div>
</template>

<script>
/* import parsePhoneNumber from "libphonenumber-js/mobile" */
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { startProcess } from '@/services'


export default {
  name: 'App',
  components: {
   /*  ValidationProvider,
    ValidationObserver */
  },
  data: function () {
    return {
      tel: "",
      email:""
    


    }
  },
  methods:{
    sendForm () {
      alert("Obrazec poslan; payload: tel = "+ this.tel)
    },
    /* preveriCifro () {
      parsePhoneNumber(1,"SI")
      console.log("preveril cifro")
    } */
    startCamundaProces () {
      startProcess()
    },

  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
