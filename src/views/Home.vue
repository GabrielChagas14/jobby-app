<template>
  <b-container>
    <b-row align-h="center" align-content="center">
      <b-col md="6">
        <b-card
          bg-variant="light"
          header="New Job"
          header-class="header-card"
          class="create-job-card"
        >
          <b-form @submit.prevent="onSubmit" @restet.prevent="onReset">
            <b-form-group>
              <b-form-input
                type="text"
                size="lg"
                placeholder="Title"
                class="title"
                v-model="title"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-textarea
                size="lg"
                placeholder="Description"
                class="description"
                v-model="description"
              >
              </b-form-textarea>
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
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        data: "2022-01-20",
      },
    };
  },
  methods: {
      onSubmit() {
      /*authService.login(this.form).then((res) => {
        console.log(res);
          if(res.status == 200){
          this.$router.push("/Home");
        }
      });*/
    },
    onReset() {
      this.form.email = "";
      this.form.password = "";
    },
  }
};
</script>

<style lang="scss" scoped>
.create-job-card {
  margin: 50px;
}
.header-card {
  font-size: 16pt;
  font-weight: bolder;
  color: rgb(101, 101, 102);
}
.title {
  border: 0;
  border-bottom: 4px solid rgb(101, 101, 102);
  padding-bottom: 0;
  box-shadow: none !important;
}
.title:focus {
  border-bottom: 4px solid #2cb1be;
}
.description {
  border: 0;
  box-shadow: none !important;
  border-bottom: 4px solid rgb(101, 101, 102);
}
.description:focus {
  border-bottom: 4px solid #2cb1be;
}
</style>
