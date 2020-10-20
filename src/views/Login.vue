<template>
  <div class="login">
    <h3 class="mb-4">Sign In</h3>
    <input
      type="text"
      v-model="email"
      name="email"
      placeholder="Email"
      class="form-control mb-4"
    />
    <input
      type="password"
      v-model="password"
      name="password"
      placeholder="Password"
      class="form-control mb-4"
    />
    <button @click="login" class="btn btn-info mb-4">Connection</button>
    <p>
      You don't have an account ? You can
      <router-link to="/signup">create one</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      let self = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert(
              "Well done" +
                JSON.stringify(user.user.email) +
                "! You are now connected"
            );
            self.$router.replace("home");
          },
          function(err) {
            alert("Oops," + err.message);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped></style>
