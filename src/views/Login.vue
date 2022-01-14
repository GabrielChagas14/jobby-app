<template lang="">
  <div  class="background">
    <b-container class="form-container">
      <b-row align-h="center" align-content="center">
        <b-col md="6">
          <b-card
            header="Login"
            header-bg-variant="primary"
            header-text-variant="white"
            ><b-form @submit.prevent="onSubmit" @restet.prevent="onReset">
              <font-awesome-icon icon="envelope" class="icon" /> E-mail:
              <b-form-group>
                <b-form-input
                  id="input-email"
                  type="text"
                  placeholder="Enter e-mail"
                  v-model="form.email"
                >
                </b-form-input>
              </b-form-group>
              <font-awesome-icon icon="lock" class="icon" /> Password:
              <b-form-group>
                <b-form-input
                  id="input-password"
                  type="password"
                  placeholder="Enter password"
                  v-model="form.password"
                >
                </b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary" class="button-submit"
                >Submit</b-button
              >
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import authService from "../services/auth.service";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      authService.login(this.form).then((res) => {
        console.log(res);
          if(res.status == 200){
          this.$router.push("/Home");
        }
      });
    },
    onReset() {
      this.form.email = "";
      this.form.password = "";
    },
  },
};
</script>
<style lang="scss">
.icon {
  color: rgb(192, 192, 192);
  margin-left: 5px;
}
.background {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    #332775 5%,
    #2cb1be 100%
  );
}
</style>
