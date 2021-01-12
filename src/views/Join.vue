<template>
  <div>
    <h2>Sign Up</h2>
    <b-form @reset="onReset" v-if="show">
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
          trim
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
          trim
        ></b-form-input>
      </b-form-group>

      <b-button type="button" @click="onSubmit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: "Join"
    , data() {
      return {
        form: {
          email: '',
          name: '',
          password: ''
        },
        show: true
      }
    }
    , methods: {
      ...mapActions(['joinUser'])
      , async onSubmit() {        
        const {email, name, password} =  this.form;
        this.joinUser({
          email
          , name
          , password
          , success : () => {
              this.$router.push('/');
          }
        })
      }
      , onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = '1234@1234'
        this.form.name = 'test'
        this.form.password = 'test'
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>