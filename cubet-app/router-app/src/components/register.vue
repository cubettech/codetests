<template>
  <div class="card text-center m-3">
    <h5 class="card-header">Registration</h5>
     <div class="card-body">{{this.$route.query.reference}}
                        <form @submit="formSubmit">
                        <strong>Name:</strong>
                        <input type="text" class="form-control" v-model="name">
                        <br/><br/>
                        <strong>Email:</strong>
                        <input type="text" class="form-control" v-model="email">
<br/><br/>

                        <strong>Password:</strong>
                        <input type="password" class="form-control" v-model="password">
    <br/><br/>
                        <button class="btn btn-success">Submit</button>
                        </form>
                        <strong>Output:</strong>
                        <pre>
                        {{output}}
                        </pre>
                    </div>

                    <div class="card-body">Leader Board</div>

   <div
    v-for="currency in users"
    class="currency" :key="currency.id"
  >
    {{ currency.name }}- 
    <span class="lighten">
      <span v-html="currency.id"></span>{{ currency.Points }}
    </span>
  </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "get-request",
  data() {
      
        return {
      users: null,

              name: '',
              email:'',
              password: '',
              reference:'',
              output: ''
    };
  },
  
     methods: {
          
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;

                if(this.$route.query.reference){
                    this.reference = this.$route.query.reference;
                }
                axios.post('http://127.0.0.1:8000/api/register', {
                    name: this.name,
                    password: this.password,
                    email: this.email,
                    user_reference:this.reference
                })
                .then(function (response) {
                    currentObj.output = response.data.status;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        }
};
</script>