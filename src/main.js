import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/js/bootstrap.min";
import "./assets/scss/main.scss";

createApp(App).use(store).use(router).mount("#app");
