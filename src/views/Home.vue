<template>
  <div>
    <div>
      <b-nav pills fill>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item :disabled="isDisabled">Disabled</b-nav-item>
        <button @click="logout" class="btn btn-danger">Log Out</button>
      </b-nav>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "./../firebaseInit";

export default {
  name: "Home",
  data() {
    return {
      isDisabled: true,
      userName: "",
      people: [],
    };
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
  created() {
    db.collection("person")
      .get()
      .then((querySnapshot) => {
        this.loading = false;
        querySnapshot.forEach((doc) => {
          let data = {
            id: doc.id,
            firstname: doc.data().firstname,
            lastname: doc.data().lastname,
            emailaddress: doc.data().emailaddress,
            phonenumber: doc.data().phonenumber,
            slug: doc.data().slug,
          };
          this.people.push(data);
        });
      });
  },
};
</script>

<style lang="scss" scoped></style>
