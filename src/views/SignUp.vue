<template>
  <div class="sign-up">
    <p>Let's create a new account!</p>
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
    <button @click="signup" class="btn btn-info mb-4">Sign Up</button>
    <span>or go back to <router-link to="/login">login.</router-link></span>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      let self = this;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert(user.user.email, "Your account has been created !");
            self.$router.replace("home");
          },
          function(err) {
            alert(err, "Your account has been created !");
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped></style>
