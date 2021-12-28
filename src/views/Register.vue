<template lang="">
  <b-container class="form-container">
    <b-row align-h="center" align-content="center">
      <b-col md="6">
        <b-card
          header="Crie sue conta"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <b-form @submit.prevent="onSubmit" @restet="onReset"> 
            <b-form-group id="name" label="Name:" label-for="input-name">
              <b-form-input
                id="input-name"
                type="text"
                placeholder="Enter name"
                required
              >
              </b-form-input>
            </b-form-group>
              <b-form-group
              id="email"
              label="Email adress:"
              label-for="input-email"
              v-model="form.name"
            >
              <b-form-input
                id="input-email"
                type="email"
                placeholder="Enter e-mail"
                v-model="form.email"
                required
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="password"
              label="Password:"
              label-for="input-password"
            >
              <b-form-input
                id="input-password"
                type="password"
                placeholder="Enter password"
                v-model="form.password"
                required
              >
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="button-submit">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form> </b-card
      ></b-col>
    </b-row>
  </b-container>
</template>
<script>
import UserService from '../services/user.service'
export default {
  mounted(){
    UserService.listar().then(res => {
      console.log(res.data)
    })
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit(){
      UserService.register(this.form).then(res => {
        console.log(res)
      })
    },
    onReset(){
      this.form.email = ''
      this.form.name = ''
      this.form.password = ''
    }
  },
};
</script>
<style lang="scss">
.form-container {
  margin-top: 8px;
}
.button-submit{
  margin-right:5px;
}
</style>
