<template>
  <div>
    <h2>Sign in</h2>
    <b-overlay :show="show" class="d-inline-block">
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group 
          id="input-group-2" 
          label="Your Password:" 
          label-for="input-2"
        >
          <b-form-input 
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
            trim
          ></b-form-input>
        </b-form-group>
    
        <b-button type="button" @click="login" variant="primary">Sign in</b-button>
        <br>
        
        <div>
          <b-link href="/join">Create an account</b-link>
        </div>
        
      </b-form>
    </b-overlay>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

  </div>
</template>

<script>
import { mapActions } from "vuex";

  export default {
    name: "Login"
    , data() {
      return {
        form: {
          email: '',
          password: ''
        },
        show: false
      }
    },
    methods: {
      ...mapActions(['createSession'])
      , async login() {
        this.show = !this.show;
        const { email, password } = this.form;
        this.createSession({
          email
          , password
          , success: () => {
            this.$router.push('/');
          }
        })
      }
      , join() {
        this.$router.push("/join");
      }
    }
  }
</script>