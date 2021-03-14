<template>
  <div class="card text-center m-3">
    <h5 class="card-header">Leader Board</h5>

    <div class="card-body">

   <ul
    v-for="user in users"
    class="user" :key="user.id"
  >
   <li> {{ user.name }}- 
    <span class="lighten">
      <span v-html="user.id"></span>{{ user.Points }}
    </span></li>
  </ul>

  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "get-request",
  data() {
      
        return {
      users: null
    };
  },
  created() {
    // Simple GET request using axios
    axios.get("http://127.0.0.1:8000/api/leader-board")
      .then(response => this.users = response.data.data);
      console.log(this.users);
  },
     methods: {
          
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                this.axios.post('http://127.0.0.1:8000/api/register', {
                    name: this.name,
                    password: this.password,
                    email: this.email
                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        }
};
</script>