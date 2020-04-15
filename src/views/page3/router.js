import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/page3",
      name: "page3",
      component: () => import("./views/Page3.vue")
    }
  ]
});
