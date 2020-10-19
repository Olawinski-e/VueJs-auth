import Vue from "vue";
import App from "./App.vue";
import config from "./config.js";
import firebase from "firebase";

import "./assets/scss/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

import router from "./router";

Vue.config.productionTip = false;
let app = "";

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      config,
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
