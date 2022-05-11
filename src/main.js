import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/scss/main.scss";

import axios from "axios";
import VueAxios from "vue-axios";

import { firestorePlugin } from "vuefire";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(firestorePlugin)
  .mount("#app");
