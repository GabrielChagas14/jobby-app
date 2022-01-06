<template lang="">
  <b-container class="form-container">
    <b-row align-h="center" align-content="center">
      <b-col md="6">
        <b-card
          header="Login"
          header-bg-variant="primary"
          header-text-variant="white"
          ><b-form @submit.prevent="onSubmit" @restet="onReset">
            <b-form-group id="email" label="E-mail:" label-for="input-email">
              <b-form-input
                id="input-email"
                type="text"
                placeholder="Enter e-mail"
                v-model="form.email"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="password"
              label="Password:"
              label-for="input-password"
            >
              <b-form-input
                id="input-email"
                type="text"
                placeholder="Enter password"
                v-model="form.password"
              >
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="button-submit">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password:''
      },
    };
  },
};
</script>
<style lang="scss">
.form-container {
  margin-top: 8px;
}
</style>
