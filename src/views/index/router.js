import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/index",
      component: () => import("./views/Page1.vue")
    },
    {
      path: "/index",
      name: "index",
      component: () => import("./views/Page1.vue")
    }
  ]
});
