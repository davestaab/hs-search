import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "cards",
      component: () => import(/* webpackChunkName: "cards" */ "./views/Cards")
    },
    {
      path: "/deck/:deckCode",
      component: () =>
        import(/* webpackChunkName: "deckViewer" */ "./views/DeckViewer")
    }
  ]
});
