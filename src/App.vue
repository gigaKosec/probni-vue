<template>
  <div id="app">
    <h1> TESTNO</h1>
      
      
        <ValidationObserver v-slot="{ handleSubmit}">
            <form @submit.prevent="handleSubmit(sendForm)">
              <ValidationProvider rules="required|isPhoneNumber:SI" v-slot="{ errors }" name="tel">
              <div> Prosim, vnesi mobilno številko</div>
              <input v-model="tel" type="text">
              <p> {{ errors [0]}}</p>
              
              <!-- <ul>
              <li>Ali je valid? = {{valid}}</li>
              <li>Ali je changed? = {{changed}} </li>
              </ul> -->
              </ValidationProvider>
              <button type="submit">pošlji</button>
            </form>
        </ValidationObserver>
        
  </div>
</template>

<script>
/* import parsePhoneNumber from "libphonenumber-js/mobile" */
import { ValidationProvider, ValidationObserver } from 'vee-validate';


export default {
  name: 'App',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: function () {
    return {
      tel: "",
    


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
