import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CharactersFeed from "../components/CharactersFeed.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/:page",
    name: "page",
    component: CharactersFeed,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
