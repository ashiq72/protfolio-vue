import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/vue3-flicking/dist/flicking-inline.css";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
