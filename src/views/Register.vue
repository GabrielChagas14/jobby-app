<template lang="">
  <div class="background">
    <b-container>
      <b-row align-h="center" align-content="center">
        <b-col md="6">
          <b-card
            class="form-container"
            header="Crie sue conta"
            header-bg-variant="primary"
            header-text-variant="white"
          >
            <b-form @submit.prevent="onSubmit" @restet="onReset">
              <font-awesome-icon icon="user" class="icon" /> Name:
              <b-form-group>
                <b-form-input
                  id="input-name"
                  type="text"
                  placeholder="Enter name"
                  v-model="form.name"
                  required
                >
                </b-form-input>
              </b-form-group>
              <font-awesome-icon icon="envelope" class="icon" /> E-mail adress:
              <b-form-group>
                <b-form-input
                  id="input-email"
                  type="email"
                  placeholder="Enter e-mail"
                  v-model="form.email"
                  required
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
                  required
                >
                </b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary" class="button-submit"
                >Submit</b-button
              >
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-card></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>
<script>
import UserService from "../services/user.service";
export default {
  mounted() {
    UserService.index().then((res) => {
      console.log(res.data);
    });
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      UserService.store(this.form).then((res) => {
        console.log(res.ok);
      });
    },
    onReset() {
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
    },
  },
};
</script>
<style lang="scss">
.button-submit {
  margin-right: 5px;
}
</style>
