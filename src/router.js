import Vue from "vue";
import Router from "vue-router";
import store from "@/store.js";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "restaurants",
      component: () => import("./pages/Restaurants.vue"),
      props: true
    },

    {
      path: "/:slug",
      name: "restaurant",
      component: () => import("./pages/Restaurant.vue"),
      props: true,
      beforeEnter: (to, from, next) => {
        const exists = store.restaurants.find(
          restaurant => restaurant.slug === to.params.slug
        );
        if (exists) {
          next();
        } else {
          next({ name: "notFound" });
        }
      }
    },

    {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: () => import("./pages/NotFound.vue")
    }
  ]
});
