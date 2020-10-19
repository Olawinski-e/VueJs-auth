<template>
  <div class="login">
    <h3 class="mb-4">Sign In</h3>
    <input type="text" placeholder="Email" class="form-control mb-4" />
    <input type="password" placeholder="Password" class="form-control mb-4" />
    <button @click="login" class="btn btn-info mb-4">Connection</button>
    <p>
      You don't have an account ? You can
      <router-link to="/signup">create one</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.replace("home");
    },
  },
};
</script>

<style lang="scss" scoped></style>
