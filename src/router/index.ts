import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CharactersFeed from "../components/CharactersFeed.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/:page(\\d+)",
    name: "page",
    component: CharactersFeed,
  },
  {
    path: "/*",
    redirect: () => {
      return { path: "/1" };
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
