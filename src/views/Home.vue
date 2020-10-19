<template>
  <div>
    HELLOOOO login person

    <button @click="logout" class="btn btn-danger">Log Out</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
