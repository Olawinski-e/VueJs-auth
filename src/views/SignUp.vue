<template>
  <div class="sign-up">
    <p>Let's create a new account!</p>
    <input type="text" placeholder="Email" class="form-control mb-4" />
    <input type="password" placeholder="Password" class="form-control mb-4" />
    <button class="btn btn-info mb-4">Sign Up</button>
    <span>or go back to <router-link to="/login">login.</router-link></span>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
