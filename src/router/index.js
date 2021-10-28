import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Maintenance from "../views/Maintenance.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    component: Maintenance
  },
];

const router = new VueRouter({
  routes,
});

export default router;
